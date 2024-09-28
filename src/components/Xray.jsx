import React, { useState } from 'react';
import axios from 'axios';

const Xray = () => {
  const [inputs, setInputs] = useState({
    ctsPower: ['', '', '', '', ''],
    pumpsPower: ['', '', ''],
    chillerCHWRT: ['', '', '', '', ''],
    chillerPower: ['', '', '', '', '', ''],
  });

  const [results, setResults] = useState({
    ctsPowerResult: null,
    pumpsPowerResult: null,
    chillerCHWRTResult: null,
    chillerPowerResult: null,
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (model, index, value) => {
    const updatedInputs = { ...inputs };
    updatedInputs[model][index] = value;
    setInputs(updatedInputs);
  };

  // Handle prediction request
  const handlePredict = async (model, route, inputData) => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/predict/${route}`, {
        input: [inputData.map(Number)], // Convert inputs to numbers
      });
      setResults((prev) => ({ ...prev, [`${model}Result`]: response.data }));
    } catch (error) {
      console.error(`Error predicting ${route}:`, error);
      alert(`Error predicting ${route}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-10">
      {/* CTS Power Model */}
      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-2">CTS Power Prediction</h2>
        <form>
          {['Plant Cooling Rate', 'Wetbulb Temp', 'Relative Humidity', 'Chilled Water Flow', 'Condenser Water Flow'].map((label, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700">{label}</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={inputs.ctsPower[index]}
                onChange={(e) => handleInputChange('ctsPower', index, e.target.value)}
              />
            </div>
          ))}
        </form>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handlePredict('ctsPower', 'cts_power', inputs.ctsPower)}
        >
          Predict CTS Power
        </button>
        {results.ctsPowerResult && (
          <div className="mt-2 text-gray-700">Prediction: {JSON.stringify(results.ctsPowerResult)}</div>
        )}
      </div>

      {/* Pumps Power Model */}
      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-2">Pumps Power Prediction</h2>
        <form>
          {['Plant Cooling Rate', 'Chilled Water Flow', 'Condenser Water Flow'].map((label, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700">{label}</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={inputs.pumpsPower[index]}
                onChange={(e) => handleInputChange('pumpsPower', index, e.target.value)}
              />
            </div>
          ))}
        </form>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handlePredict('pumpsPower', 'pumps_power', inputs.pumpsPower)}
        >
          Predict Pumps Power
        </button>
        {results.pumpsPowerResult && (
          <div className="mt-2 text-gray-700">Prediction: {JSON.stringify(results.pumpsPowerResult)}</div>
        )}
      </div>

      {/* Chiller 5 CHWRT Model */}
      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-2">Chiller 5 CHWRT Prediction</h2>
        <form>
          {['Plant Cooling Rate', 'CHWST', 'CHWRT', 'CWST', 'CHW Flow Rate'].map((label, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700">{label}</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={inputs.chillerCHWRT[index]}
                onChange={(e) => handleInputChange('chillerCHWRT', index, e.target.value)}
              />
            </div>
          ))}
        </form>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handlePredict('chillerCHWRT', 'chiller_5_chwrt', inputs.chillerCHWRT)}
        >
          Predict CHWRT
        </button>
        {results.chillerCHWRTResult && (
          <div className="mt-2 text-gray-700">Prediction: {JSON.stringify(results.chillerCHWRTResult)}</div>
        )}
      </div>

      {/* Chiller 5 Power Model */}
      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-2">Chiller 5 Power Prediction</h2>
        <form>
          {['Plant Cooling Rate', 'CHWST', 'CHWRT', 'CWST', 'CHW Flow Rate', 'Extra Param'].map((label, index) => (
            <div key={index} className="mb-2">
              <label className="block text-gray-700">{label}</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full"
                value={inputs.chillerPower[index]}
                onChange={(e) => handleInputChange('chillerPower', index, e.target.value)}
              />
            </div>
          ))}
        </form>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => handlePredict('chillerPower', 'chiller_5_power', inputs.chillerPower)}
        >
          Predict Chiller Power
        </button>
        {results.chillerPowerResult && (
          <div className="mt-2 text-gray-700">Prediction: {JSON.stringify(results.chillerPowerResult)}</div>
        )}
      </div>

      {loading && <p className="col-span-2 text-center text-gray-600 mt-4">Loading...</p>}
    </div>
  );
};

export default Xray;
