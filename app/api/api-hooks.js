import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory, isResponseOk } from './api-utils'

/* export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category)
      setData(data)
    }
    fetchData()
  }, [])
  return data
} */

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      if (isResponseOk(data)) {
        setData(data); 
      } else {
        // Обработать ошибку или установить пустой массив 
        setData([]);
      }
    }
    fetchData();
  }, []);
  return data;
};