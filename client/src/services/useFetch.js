import { useEffect, useState } from "react"

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const abortController = new AbortController();
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data from url');
          }
          return res.json();
          }).then((data) => {
              setData(data);
            setIsLoading(false);
            console.log(data);
          }).catch((err) => {
              console.log(err.message);
        });
      return () => abortController.abort();
  },[url])
  return {isLoading, data};
}

export default useFetch;    