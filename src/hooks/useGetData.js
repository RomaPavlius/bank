import axios from "axios";
import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import Cookies from 'js-cookie';


export const useGetData = (url, params) => {
  // const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(false);
  const [error, setError] = useState("");
  // const [cookies, setCookie] = useCookies(['.AspNetCore.saml2']);

  // console.log("newcokies", Cookies.get('.AspNetCore'));
  // setTimeout(() => console.log("newcokies", Cookies.get('.AspNetCore.saml2')), 2000);

  // console.log("cookies1111", cookies);
  const getData = async () => {
    try {
      // setIsLoading(true)
      const response = await axios.get(url, {
        // withCredentials: true,
        mode: 'no-cors'
      });
      //const response = await response1.json();

      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      // setIsLoading(false)
    }
  };

  return { getData, data, error };
};
