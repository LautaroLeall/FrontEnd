import { useState } from 'react';

function EdadNombre() {
    const [name, setName] = useState('');
    const [randomAge, setRandomAge] = useState(null);
    const [loading, setLoading] = useState(false);

    const edadEstimada = async () => {
        if (!name.trim()) return;

        setLoading(true);

        try {
            // Se hace el fetch pero no usamos la edad real
            const response = await fetch(`https://api.agify.io/?name=${name}`);
            if (!response.ok) throw new Error('Error en la solicitud');

            await response.json(); // Se ignora la edad real

            const edadRandom = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
            setRandomAge(edadRandom);
        } catch (error) {
            console.error('Error al obtener edad:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='nombre-edad'>
            <h3>Edad Estimada</h3>
            <div className="contenedor">
                <input
                    className='input'
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={edadEstimada} disabled={loading}>
                    {loading ? 'Consultando...' : 'Obtener edad'}
                </button>
            </div>
            {randomAge !== null && (
                <p>LA EDAD ESTIMADA DE {name.toUpperCase()} ES: {randomAge} AÑOS.</p>
            )}
        </div>
    );
}

export default EdadNombre;
