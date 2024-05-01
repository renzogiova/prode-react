import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const [userToLogin, setUserToLogin] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LOGIN');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control value={userToLogin.username} type='text' maxLength={32}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control value={userToLogin.email} type='email' maxLength={64}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control value={userToLogin.password} type='password' maxLength={64}/>
      </Form.Group>
      <Button type='submit'>LOG IN</Button>
    </Form>
  )
}

export default Login