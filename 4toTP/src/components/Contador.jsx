import { useState } from 'react'

function Contador() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="contador">
                <button>
                    El contador es {count}
                </button>
                <div className="buttons">
                    <button onClick={() => setCount((count) => count + 1)}>
                        +
                    </button>
                    <button onClick={() => setCount((count) => count - 1)}>
                        -
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contador