import React, {use, useEffect,useState} from 'react'
import {useLoaderDta} from 'react-router-dom'

function GitHub(){
    
    //const data = useLoaderDta()

    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/smitsudani555')
            .then(responce => responce.json())
            .then(data => setData(data))
    },[])

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
    
}