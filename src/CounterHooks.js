import React from 'react'

function CounterHooks({initialCount}) {
    return (
        <div>
            <button>-</button>
            <span>{initialCount}</span>
            <button>+</button>
        </div>
    )
}

export default CounterHooks
