import React, { useState } from 'react';
import './SalaryCalculator.css';


const min=(a,b)=>{  return a<b?a:b;  }

const SalaryCalculator = () => {
  const [ctc, setCtc] = useState('');
  const [tax, setTax] = useState(0);
  const [inHandSalary, setInHandSalary] = useState(0);

  const calculateSalary = () => {
    // Sample tax calculation logic
    // You should replace this with your actual tax calculation logic
   
    const before_tax=parseFloat(ctc);
    var ctca=ctc
   

    if(before_tax>300000){  ctca=ctca-0.05*(min(600000,before_tax)-0) }
    if(before_tax>600000){ ctca=ctca-0.10*(min(900000,before_tax)-600000)}
    if(before_tax>900000){ ctca=ctca-0.15*(min(1200000,before_tax)-900000)}
    if(before_tax>1200000){ctca=ctca-0.20*(min(1500000,before_tax)-1200000)}
    if(before_tax>1500000){ ctca=ctca-0.30*(before_tax-1200000)}
   

    // const calculatedTax = parseFloat(ctc) * taxRate;
    // const calculatedInHandSalary = parseFloat(ctc) - calculatedTax;

    const calculatedTax = parseFloat(ctc)-parseFloat(ctca);
    const calculatedInHandSalary = parseFloat(ctca);

    setTax(calculatedTax);
    setInHandSalary(calculatedInHandSalary);
  };

  return (
    <div className="salary-calculator">
      <h2>Salary Calculator</h2>
      <div className="input-container">
        <label htmlFor="ctc">Total Annual CTC:</label>
        <input
          type="number"
          id="ctc"
          value={ctc}
          onChange={(e) => setCtc(e.target.value)}
        />
        <button onClick={calculateSalary}>Calculate</button>
      </div>
      <div className="output-container">
        <div>
          <h3>Tax Deduction:</h3>
          <p>₹{tax.toFixed(2)}</p>
        </div>
        <div>
          <h3>In-Hand Salary:</h3>
          <p>₹{inHandSalary.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
