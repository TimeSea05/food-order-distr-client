const logout = async (resetName) => {
  const response = await fetch('http://localhost:8000/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
  const content = await response.json()

  alert(content.message)
  resetName('')
}

export default logout