import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const data = await res.json();

                setResponse(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return { response, isLoading, error };
};

export default useFetch;
