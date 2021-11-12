import { useEffect, useState } from "react"

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch(url, options);
            const data = await res.json();            

            setResponse(data);
        } catch (error) {
            setError(error);
        }  
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { response, error };
}

export default useFetch;