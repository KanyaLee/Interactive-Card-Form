import React from 'react';
import { useState, useEffect } from 'react';
import FrontCard from './FrontCard.tsx';
import BackCard from './BackCard.tsx';


const InputForm: React.FC = () => {

    const [inputName, setInputName] = useState('')
    const [inputCardNumber, setInputCardNumber] = useState('')
    const [inputMonth, setInputMonth] = useState('')
    const [inputYear, setInputYear] = useState('')
    const [inputCVC, setInputCVC] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateInputs = () => {
        const newErrors:{ [key: string]: string } = {};

        if (!/^[a-zA-Z\s]*$/.test(inputName)) {
            newErrors.name = 'Name should contain only letters';
        }
        if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(inputCardNumber)) {
            newErrors.cardNumber = 'Card number should be in format 1234 5678 9123 0000';
        }
        if (!/^\d{2}$/.test(inputMonth) || parseInt(inputMonth) < 1 || parseInt(inputMonth) > 12) {
            newErrors.month = 'Invalid month';
        }
        if (!/^\d{2}$/.test(inputYear)) {
            newErrors.year = 'Invalid year';
        }
        if (!/^\d{3}$/.test(inputCVC)) {
            newErrors.cvc = 'CVC should be a 3-digit number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateInputs()) {
            console.log('Form submitted:', { inputName, inputCardNumber, inputMonth, inputYear, inputCVC });
        }
    };


    return (
        <div className="input-form">
            <FrontCard 
                name={inputName}
                cardNumber={inputCardNumber}
                month={inputMonth}
                year={inputYear}
                />

            <BackCard 
                cvc={inputCVC} />

            <form onSubmit={handleSubmit}>
                <p>CARDHOLDER NAME</p>
                <input 
                    type="text" 
                    placeholder="e.g. Jane Appleseed" 
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    required/> 
                
                {errors.name && <span className='error'>{errors.name}</span>} 

                <p>CARD NUMBER</p>
                <input 
                    type="text" 
                    value={inputCardNumber}
                    placeholder="e.g. 1234 5678 9123 0000" 
                    onChange={(e) => setInputCardNumber(e.target.value)}
                    required/>

                {errors.cardNumber && <span className='error'>{errors.cardNumber}</span>} 

                <button>Submit</button>
                <div>
                    <div>
                        <p>EXP. DATE (MM/YY)</p>
                        <div>
                            <input 
                            type="text" 
                            value={inputMonth}
                            placeholder="MM" 
                            onChange={(e) => setInputMonth(e.target.value)}
                            required/>

                            <input 
                                type="text" 
                                value={inputYear}
                                placeholder="YY" 
                                onChange={(e) => setInputYear(e.target.value)}
                                required/>
                            
                            {errors.month && <span className='error'>{errors.month}</span>}
                            {errors.year && <span className='error'>{errors.year}</span>}

                        </div>
                    </div>
                    <div>
                        <p>CVC</p>
                        <input 
                            type="text" 
                            placeholder="e.g. 123" 
                            value={inputCVC}
                            onChange={(e) => setInputCVC(e.target.value)}
                            required/>

                            {errors.cvc && <span className='error'>{errors.cvc}</span>}
                    </div>
                </div>
                <div>
                    <button>Confirm</button>
                </div>

            </form>
            
        </div>
        );
}

export default InputForm;