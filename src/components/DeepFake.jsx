import React, { useState } from "react";
import axios from 'axios';

const DeepFake = () => {
    const initialFormData = {
        RT: '',
        kW_Tot: '',
        kW_RT: '',
        CH_load: '',
        CH1: '',
        CH2: '',
        ch3: '',
        ch4: '',
        kw_chh: '',
        kw_ckp: '',
        kw_chs: '',
        kw_cds: '',
        kw_ct: '',
        gpm: '',
        deltachw: '',
        chws: '',
        chwr: '',
        deltacdw: '',
        cdhi: '',
        cdlo: '',
        wbt: '',
        deltact: '',
        hz_chp: '',
        hz_chs: '',
        hz_cds: '',
        hz_ct: '',
        percent_ch: '',
        percent_chp: '',
        percent_cds: '',
        percent_ct: '',
        rh: '',
        temp: '',
        wbt_c: ''
    };

    const defaultValues = {
        RT: '345.9',
        kW_Tot: '262.3',
        kW_RT: '0.758',
        CH_load: '55.6',
        CH1: '1',
        CH2: '0',
        ch3: '0',
        ch4: '0',
        kw_chh: '188.5',
        kw_ckp: '20.1',
        kw_chs: '0',
        kw_cds: '32.6',
        kw_ct: '21.1',
        gpm: '1339',
        deltachw: '6.2',
        chws: '45.5',
        chwr: '51.7',
        deltacdw: '6.1',
        cdhi: '87.3',
        cdlo: '81.2',
        wbt: '72.7',
        deltact: '-8.5',
        hz_chp: '45',
        hz_chs: '0',
        hz_cds: '48',
        hz_ct: '49',
        percent_ch: '71.9',
        percent_chp: '7.7',
        percent_cds: '12.4',
        percent_ct: '8',
        rh: '81.4',
        temp: '27.9',
        wbt_c: '25.3'
    };

    const [formData, setFormData] = useState(initialFormData);
    const [result, setResult] = useState(null);
    const [alert, setAlert] = useState(null); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputData = Object.values(formData).map(value => parseFloat(value));

        if (inputData.some(isNaN)) {
            setAlert({ type: 'error', message: 'Please ensure all fields are filled with valid numbers.' });
            return;
        }

        const payload = {
            input: [inputData]  
        };
        console.log(payload);
        axios.post('http://localhost:3000/predict/rf_model', payload)
            .then(response => {
                setResult(response.data.rf_model_predictions[0]);
                setAlert({ type: 'success', message: 'Prediction successful!' });
            })
            .catch(error => {
                console.error("There was an error making the prediction!", error);
                setAlert({ type: 'error', message: 'There was an error making the prediction.' });
            });
    };

    const handleSetDefaultValues = () => {
        setFormData(defaultValues);
    };
    const handleClearForm = () => {
        setFormData(initialFormData);
    };

    const formatPrediction = (prediction) => {
        return prediction === 1 ?
            <span className="text-red-500 font-bold">Fault Detected</span> :
            <span className="text-green-500 font-bold">No Fault</span>;
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">{key}:</label>
                        <input
                            type="number"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                ))}
               <button
                    type="submit"
                    className="bg-[#001F3F] text-white col-span-2 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    Predict
                </button>

            </form>

            
            <button
                onClick={handleSetDefaultValues}
                className="mt-2 px-4 py-2 w-48 bg-[#6A9DF0] hover:bg-[#65a7de] text-[#001F3F] rounded-lg  transition-colors duration-300"
            >
                Set Default Values
            </button>

            <button
                onClick={handleClearForm}
                className="mt-2 px-4 py-2 w-48 bg-[#6A9DF0] hover:bg-[#65a7de] text-[#001F3F] rounded-lg  transition-colors duration-300"
            >
                Clear Form
            </button>
           
            {alert && (
                <div className={`w-full text-center p-2 mt-4 ${alert.type === 'error' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'} rounded-lg`}>
                    {alert.message}
                </div>
            )}

            {result !== null && (
                <div className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-md mt-4">
                    <h2 className="font-bold text-lg mb-2 text-center">Prediction Result:</h2>
                    <div className="text-center">
                        {formatPrediction(result)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeepFake;
