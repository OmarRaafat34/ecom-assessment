import { useEffect, useState } from "react";
import { IUseFetchProps } from "./types";

const useFetch = (props: IUseFetchProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(props.url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 1000);
      } catch (err: any) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [props.url]);

  return { data, loading, error };
};

export default useFetch;
