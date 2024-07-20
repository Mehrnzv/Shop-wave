import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFromApi(url)
      .then((res) => {
        setLoading(true);
        setData(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
