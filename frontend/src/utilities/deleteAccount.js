const deleteAccount = async (resetName) => {
  const sureToDelete = window.confirm('Are you sure to delete your account permanently?')
  if (sureToDelete) {
    const response = await fetch('http://localhost:8000/api/delete-account', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
    const content = await response.json()

    window.alert(content.message)
    resetName('')
  }
}

export default deleteAccount
