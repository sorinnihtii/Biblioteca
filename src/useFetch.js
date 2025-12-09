import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const abortContent = new AbortController()

    fetch(url, {
      signal: abortContent.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Eroare la incarcare: ${res.status}`)
        }
        return res.json()
      })

      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })

      .catch((err) => {
        setIsPending(false)
        if (err.name === "AbortError") {
          console.log("fetch aborted")
        } else console.error(err)

        if (err.name === "SyntaxError") {
          setError("Nu s-a putut conecta la server")
        } else if (err.name === "TypeError") {
          setError("Conexiunea cu serverul a fost refuzată")
        } else setError(err.message)
      })
    return () => abortContent.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
