## Backend of Food Distribution System

### 1. File Structure

```bash
.
├── controllers
│   └── authController.go
├── database
│   └── connection.go
├── models
│   └── user.go
├── routes
│   └── routes.go
├── go.mod
├── go.sum
├── main.go
└── readme.md
```

### 2. How to run the backend server

First you need to connect to mysql server. The following is default settings of mysql server, you can change them in `backend/database/connection.go`:

* hostname: localhost
* user: root
* password: 111111
* port: 3306

Then in bash/zsh, run `go run main.go`. The server then will be started.

### 3. APIs

In the backend, APIs for users to register, login, logout are provided. To use these APIs, you just need to send a POST request to `localhost:8000/api/[function]`:

There are now 5 APIs for developers to use:

* Register: http://localhost:8000/api/register (POST)
* Login: http://localhost:8000/api/login (POST)
* User: http://localhost:8000/api/user (GET)
* Logout: http://localhost:8000/api/logout (POST)
* DeleteAccount: http://localhost:8000/api/delete-account (POST)

**Example: Login **

```js
const response = await fetch('http://localhost:8000/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({
    email,
    password
  })
})

const content = await response.json()
```

Response of the backend:

1. User not found (HTTP Code: 404)

   ```json
   {"message": "user not found"}
   ```

2. Incorrect password (HTTP Code: 400)

   ```json
   {"message": "incorrect password"}
   ```

3. Internal server error (HTTP Code: 500)

   ```json
   {"message": "could not login"}
   ```

4. Success (HTTP Code: 200)

   ```json
   {
       "message": "success",
       "name": [name]
   }
   ```



An API to authenticate users using jwt(Json Web Token) is also provided. To use this API, you just need to send a GET request to `localhost:8000/api/user`. If authentication passed, the backend will send a json containing the infomation of the user from database.

**Example: **

```js
const response = await fetch('http://localhost:8000/api/user', {
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include'
})
const content = await response.json()
```

Response of backend:

1. Authentication did not pass

   ```json
   {"message": "unauthenticated"}
   ```

2. Authentication passed

   ```json
   // example
   {
       "id": 1,
       "name": "a",
       "email": "a@a.com"
   }
   ```

   

There is also an API for user to delete their account. This API works only when users have login their accounts. Send a `POST request to `localhost:8000/api/delete-account` can delete the account of current user permanently.