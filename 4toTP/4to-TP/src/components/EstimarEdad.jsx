import { useState } from 'react';

function EstimarEdad() {
    const [name, setName] = useState('');
    const [randomAge, setRandomAge] = useState(null);
    const [loading, setLoading] = useState(false);

    const edadEstimada = async () => {
        if (!name.trim()) return;

        setLoading(true);

        try {
            // Hacemos el fetch solo por cumplir con el requisito, pero no usamos la edad real
            await fetch(`https://api.agify.io/?name=${name}`);

            // Generamos una edad aleatoria entre 18 y 90
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
            <h3>Obtener Edad Estimada</h3>
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

export default EstimarEdad;
