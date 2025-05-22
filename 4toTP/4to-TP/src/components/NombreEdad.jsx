import { useState } from 'react';

function EdadRandomPorNombre() {
    const [name, setName] = useState('');
    const [randomAge, setRandomAge] = useState(null);
    const [loading, setLoading] = useState(false);

    const obtenerEdadAleatoria = async () => {
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
            <h2>Edad aleatoria por nombre</h2>
            <div className="contenedor">
                <input
                    className='input'
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={obtenerEdadAleatoria} disabled={loading}>
                    {loading ? 'Consultando...' : 'Obtener edad'}
                </button>
            </div>
            {randomAge !== null && (
                <p>{name.toUpperCase()} TIENE {randomAge} AÑOS.</p>
            )}
        </div>
    );
}

export default EdadRandomPorNombre;
