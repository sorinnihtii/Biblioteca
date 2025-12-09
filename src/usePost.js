import { useEffect, useState } from "react"

const usePost = (url, pushUrl, history, params) => {
  useEffect(() => {
    const [result, setResult] = useState(null)

    fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Eroare la incarcare ${res.status}`)
        }
        return res.json()
      })
      .then((result) => {
        if (result.success) {
          history.push(pushUrl)
          alert("Operatiune realizata cu succes")
          setResult(result)
        } else {
          alert(result.error)
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Nu s-a putut conecta la server")
      })
  }, [])

  return result
}

export default usePost
