import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';


export default function Sinin() {
    const [showpass, setshowpass] = useState(true)
   const hidepass=()=>{
      setshowpass(!showpass)
    }
  return (
    <>
      <Form>
        <Form.Group className="mb-3 " controlId="formBasicEmail" >
          <Form.Control type="email" placeholder="پست الکترونیک" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type={showpass ? "text" : "password"} placeholder="رمز عبور" required />
          <Button onClick={hidepass}>icon</Button>
        </Form.Group>
        <Button variant="primary" type="submit">
          تبت نام
        </Button>
      </Form>
    </>
  );
}
