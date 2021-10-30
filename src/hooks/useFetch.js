import { useEffect, useState } from "react"

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (url, options) => {
        try {
            const res = await fetch(url, options);
            const data = await res.json();            

            setResponse(data);
        } catch (error) {
            setError(error);
        }  
    }

    useEffect(() => {
        fetchData(url, options);
    }, [])

    return { response, error };
}

export default useFetch;