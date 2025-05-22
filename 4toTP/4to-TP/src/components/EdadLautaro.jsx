import { useEffect, useState } from 'react';

const EdadDeLautaro = () => {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const name = 'Lautaro';

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch(`https://api.agify.io/?name=${name}`);
                const data = await response.json();
                setDatos(data);  // guardamos exactamente como viene
            } catch (error) {
                console.error('Error al obtener datos:', error);
                setDatos(null);
            } finally {
                setCargando(false);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <div className="edad-estimada">
            <h3>Datos originales para "{name}"</h3>
            {cargando ? (
                <p>Cargando...</p>
            ) : datos ? (
                <pre>{JSON.stringify(datos, null, 2)}</pre> // mostramos el objeto tal cual
            ) : (
                <p>No se encontraron datos para el nombre <strong>{name}</strong>.</p>
            )}
        </div>
    );
};

export default EdadDeLautaro;

// COMO DEBERIA SER LA API
// {
//   "name": "Lautaro",
//   "age": null,
//   "count": 0
// }

// COMO ME APARECE
// {
//   "error": "Request limit reached"
// }
