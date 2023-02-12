import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchData = (url, params) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                // setIsLoading(true)
                const response1 = await fetch(url, {
                    //mode: 'no-cors',
                });
                const response = await response1.json();
                console.log(response)
            
                setData(response.data);

            } catch (error) {
                setError(error.message)
            } finally {
                // setIsLoading(false)
            }

        };
        fetchData()
    }, [url])
    return { data, error }
}



