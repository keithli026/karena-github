import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AlertBox from './AlertBox'

const WebForm = () => {
  // form state
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    errors: {
      name: '',
      email: '',
      message: ''
    }
  });
  const [showAlert, setShowAlert] = useState(false);


  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const validateFormField = (name) => {

    let error = "";

    switch(name) {
      case "name":
        if (!formData.name.trim()) {
          error = 'Name is required';
        }
        return error;
      case "email":
        if (!formData.email.trim()) {
          error = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
          error = 'Please enter a valid email';
        }
        return error;
      case "message":
        if (!formData.message.trim()) {
          error = 'Message is required';
        }
        return error;
      default:
        return error;
    }
  };

  // form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();
    // console.log(formData, errors);
    const serviceId = "service_l6jc555";
    const templateId = "template_w92fqqk";
    const publicKey = "FdVgDi1-mu65pws-R"; // Account -> API Keys

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform submission logic

      setShowAlert(true);
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    } else {
      // Update form state with validation errors
      setFormData({ ...formData, errors });
    }

  };

  const handleBlur = (event) => {

    const error = validateFormField(event.target.name);

    setFormData({
      ...formData,
      errors: {
        ...formData.errors,
        [event.target.name]: error
      }
    });

    // console.log(formData, event.target.name);
  }

  // input change handler
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        // [name]: ''
      }
    });

    // console.log(formData, errors);
  };

  return (
    <>
      <Form id="webform" ref={formRef} onSubmit={handleSubmit}>
        {showAlert ? <AlertBox showAlert={showAlert} setShowAlert={setShowAlert} /> : ""}
        <Form.Group className={formData.errors.name ? "field error" : "field"} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
          {formData.errors.name && <p className="error">{formData.errors.name}</p>}
        </Form.Group>
        <Form.Group className={formData.errors.email ? "field error" : "field"} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
          {formData.errors.email && <p className="error">{formData.errors.email}</p>}
        </Form.Group>
        <Form.Group className={formData.errors.message ? "field error" : "field"} controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
          {formData.errors.message && <p className="error">{formData.errors.message}</p>}
        </Form.Group>
        <Button variant="light" type="submit">
          Send Message
        </Button>
      </Form>
      {/* <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {formData.errors.name && <p className="error">{formData.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {formData.errors.email && <p className="error">{formData.errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
          {formData.errors.message && <p className="error">{formData.errors.message}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form> */}
    </>

  );
}

export default WebForm