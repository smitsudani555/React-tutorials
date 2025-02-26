import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  // State management
  const [amount, setAmount] = useState(1); // Default to 1 for usability
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency conversion rates
  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : []; // Ensure currencyInfo is defined

  // Swap function to exchange 'from' and 'to' values
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Fix: Swap amounts correctly
    setConvertedAmount(amount);
  };

  // Convert function
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)} // Fix: Pass correct currency value
              selectCurrency={from}
              onAmountChange={setAmount} // Fix: Pass setAmount directly
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)} // Fix: Pass correct currency value
              selectCurrency={to} // Fix: Should be 'to' not 'from'
              amountDisable
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

// Fixes applied:
// 1. Ensured currencyInfo is properly accessed to avoid undefined errors.
// 2. Fixed the swap function logic to properly exchange amounts.
// 3. Fixed InputBox props to pass setFrom and setTo correctly.
// 4. Corrected the selectCurrency prop for the 'To' field.
// 5. Fixed currency selection by ensuring onCurrencyChange updates state properly.
// 6. Added a fallback for empty currency options to prevent selection issues.