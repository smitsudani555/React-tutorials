import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";
import { nanoid } from 'nanoid';
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // ✅ Fixed createAccount function
    

async createAccount({ email, password, name }) {
    try {
        const userId = nanoid(24);  // Generates a valid 24-character ID
        const userAccount = await this.account.create(userId, email, password, name);
        
        if (userAccount) {
            return this.login({ email, password });
        }
        return userAccount;
    } catch (error) {
        console.error("Error in createAccount:", error);
        throw new Error(error.message || "Failed to create account");
    }
}
    

    async login({ email, password }) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            throw new Error(error.message || "Invalid email or password");
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite Service Error :: getCurrentUser ::", error.message);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite Service Error :: logout ::", error.message);
        }
    }
}

const authService = new AuthService();
export default authService;
