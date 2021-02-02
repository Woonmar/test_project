import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const abortController = new AbortController();
      axios.get(url, { signal: abortController.signal })
        .then((res) => {  
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          });
      return () => abortController.abort();
  },[url])
  return {isLoading, data};
}

export default useFetch;    