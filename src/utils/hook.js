import useSWR from 'swr'
import useSWRInfinite from "swr/infinite"
import { useState, useEffect } from 'react'
import { BASE_URL } from './request'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function useFetch(endpoint) {
  const { data, error } = useSWR(`${BASE_URL}${endpoint}`, fetcher)

  return { data, error }
}

export function useFetchInfinite(endpoint) {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${BASE_URL}${endpoint}/?page=${++index}`, fetcher
  )

  return { data, error, size, setSize }
}

export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
