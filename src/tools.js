export async function tools_postRequest(url, pushUrl, history, params) {
  const body = new URLSearchParams(params)

  try {
    const res = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    if (res.ok == false) {
      throw new Error(`Eroare la incarcare: ${res.status}`)
    }
    const result = await res.json()
    console.log("Result: ", result)

    if (result.success) {
      alert("Operatiune efectuata cu succes!")
      if(history && pushUrl) {
        history.push(pushUrl)
      }
    }
    else if(result.error === "ID carte inexistent") {
        alert("ID carte inexistent!")
    }
    return result.success
  } catch (err) {
    console.error("Eroare la operatiune:", err)
    alert("Eroare la operatiune, verificati conexiunea")
    return false
  }
}
