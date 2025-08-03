import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    if (amount && currency) {
      const numAmount = parseFloat(amount);
      
      if (currency.toLowerCase() === 'euro') {
        const convertedAmount = (numAmount * 0.011).toFixed(2);
        alert(`Converting to Euro: €${convertedAmount}`);
      }
      else
      {
        const convertedAmount=(numAmount * 100.43).toFixed(2);
        alert(`Converting to Inr: Rs${convertedAmount}`);
      }
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Currency: </label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="Enter currency Euro or inr"
        />
      </div>

      <button 
        onClick={handleSubmit} 
        style={{ marginTop: '10px', padding: '5px 15px' }}
      >
        Submit
      </button>

      {result && (
        <div style={{ marginTop: '15px', color: 'blue' }}>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
};

export default CurrencyConvertor;
