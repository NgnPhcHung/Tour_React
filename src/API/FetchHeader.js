import React, { useCallback, useState } from 'react';
import superagent from 'superagent';
import axios from 'axios';
function FetchHeader() {
    const [user, setUser] = useState([]);
    const [requestError, setRequestError] = useState();
    const apiUrl = 'http://localhost:3100';
    const accessToken = "BACKHJKJHNJSHGJAH"
    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(`${apiUrl}acc/list`);
            setUser(result.data);
            console.log(result.data)
        } catch (error) {
            setRequestError(error.message)
        }
    });

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accessToken}`
        },
        error => {
            return Promise.reject(error)
        }
    )

    return <div>
        <button onClick={() => fetchData()}>Fetch</button>
        {
            user.map(us => {
                return <p key="us.UserID">{us.Password}</p>
            })
        }

    </div>;
}

export default FetchHeader;
