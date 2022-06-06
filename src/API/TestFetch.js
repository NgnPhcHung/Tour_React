import React, { useState } from 'react';

function TestFetch() {
    const [data, setData] = useState([]);
    const apiget = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    };

    return (
        <div>
            <input type='button' onClick={apiget} value='fetch' />
        </div>
    );
}

export default TestFetch;
