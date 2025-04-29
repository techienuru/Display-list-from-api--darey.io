import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Unable to fetch data from the API. Please try again later."
          );
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        const dataArray = data.results;
        setData(dataArray);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
