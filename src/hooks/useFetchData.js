import { useState, useCallback } from 'react';

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(undefined);

  const sendData = useCallback(async (fetchMethod) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetchMethod();
      if (response.status !== 200) setHasError(true);
      setData(response);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  });

  return { isLoading, hasError, data, sendData };
};

export default useFetchData;
