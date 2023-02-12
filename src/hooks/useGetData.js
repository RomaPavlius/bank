import axios from "axios"
import { useEffect, useState } from "react"

export const useGetData = (url, params) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                // setIsLoading(true)
                const response1 = await axios.get(url, {
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
        getData()
    }, [url])
    return { data, error }
}



