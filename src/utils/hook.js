import useSWR from 'swr'
import { BASE_URL } from './request'

export function useFetch(endpoint) {
    const { data, error, isLoading } = useSWR(BASE_URL.concat(endpoint), async (url) => {
      const data = await fetch(url).then(res => res.json())
  
      return data
    });
  
    return { data, error, isLoading }
}
