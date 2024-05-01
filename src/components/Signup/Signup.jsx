import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SIGNUP');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control value={newUser.firstName} type='text' maxLength={64}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control value={newUser.lastName} type='text' maxLength={64}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control value={newUser.username} type='text' maxLength={32}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control value={newUser.email} type='email' maxLength={64}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control value={newUser.password} type='password' maxLength={64}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type='password' maxLength={64}/>
      </Form.Group>
      <Button type='submit'>SIGN UP</Button>
    </Form>
  )
}

export default Signup