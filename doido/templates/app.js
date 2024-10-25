import React, { useState } from 'react';

function App() {
    const [radius, setRadius] = useState('');
    const [diameter, setDiameter] = useState('');
    const [circumference, setCircumference] = useState('');
    const [area, setArea] = useState('');

    const handleCalculate = () => {
        if (radius) {
            const r = parseFloat(radius);
            setDiameter((2 * r).toFixed(2));
            setCircumference((2 * Math.PI * r).toFixed(2));
            setArea((Math.PI * r * r).toFixed(2));
        } else if (diameter) {
            const d = parseFloat(diameter);
            const r = d / 2;
            setRadius(r.toFixed(2));
            setCircumference((Math.PI * d).toFixed(2));
            setArea((Math.PI * r * r).toFixed(2));
        } else if (circumference) {
            const c = parseFloat(circumference);
            const r = c / (2 * Math.PI);
            setRadius(r.toFixed(2));
            setDiameter((2 * r).toFixed(2));
            setArea((Math.PI * r * r).toFixed(2));
        } else if (area) {
            const a = parseFloat(area);
            const r = Math.sqrt(a / Math.PI);
            setRadius(r.toFixed(2));
            setDiameter((2 * r).toFixed(2));
            setCircumference((2 * Math.PI * r).toFixed(2));
        }
    };

    const handleClear = () => {
        setRadius('');
        setDiameter('');
        setCircumference('');
        setArea('');
    };

    return (
        <div className="container mx-auto p-4">
            <header className="bg-blue-900 p-4 flex justify-between items-center">
                <i className="fas fa-bars text-white text-2xl"></i>
                <div className="bg-blue-500 p-2 rounded mx-auto">
                    <img src="assets/RAIO.png" alt="Logo" className="w-12 h-12"/>
                </div>
            </header>
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-center">Calculadora de Círculos</h1>
                <div className="flex flex-col items-center mt-4">
                    <input 
                        type="number" 
                        placeholder="Raio" 
                        value={radius} 
                        onChange={(e) => setRadius(e.target.value)} 
                        className="p-2 border rounded mb-2"
                    />
                    <input 
                        type="number" 
                        placeholder="Diâmetro" 
                        value={diameter} 
                        onChange={(e) => setDiameter(e.target.value)} 
                        className="p-2 border rounded mb-2"
                    />
                    <input 
                        type="number" 
                        placeholder="Circunferência" 
                        value={circumference} 
                        onChange={(e) => setCircumference(e.target.value)} 
                        className="p-2 border rounded mb-2"
                    />
                    <input 
                        type="number" 
                        placeholder="Área" 
                        value={area} 
                        onChange={(e) => setArea(e.target.value)} 
                        className="p-2 border rounded mb-2"
                    />
                    <button 
                        onClick={handleCalculate} 
                        className="bg-blue-600 text-white p-2 rounded mb-2"
                    >
                        Calcular
                    </button>
                    <button 
                        onClick={handleClear} 
                        className="bg-red-600 text-white p-2 rounded"
                    >
                        Limpar
                    </button>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-bold">Resultados:</h2>
                    <p>Raio: {radius} cm</p>
                    <p>Diâmetro: {diameter} cm</p>
                    <p>Circunferência: {circumference} cm</p>
                    <p>Área: {area} cm²</p>
                </div>
            </div>
        </div>
    );
}

export default App;