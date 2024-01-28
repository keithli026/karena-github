import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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

  // form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();
    const serviceId = "service_l6jc555";
    const templateId = "template_w92fqqk";
    const publicKey = "FdVgDi1-mu65pws-R"; // Account -> API Keys

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform submission logic
      console.log(formData);
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log(result.text);
          alert("Message successfully sent to Karena LI");
        }, (error) => {
          console.log(error.text);
        });
    } else {
      // Update form state with validation errors
      setFormData({ ...formData, errors });
    }
  };

  // input change handler
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    // console.log(event.target, name, value, type);
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: ''
      }
    });
  };

  return (
    <>
      <Form id="webform" ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className={formData.errors.name ? "field error" : "field"} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
          {formData.errors.name && <p className="error">{formData.errors.name}</p>}
        </Form.Group>
        <Form.Group className={formData.errors.email ? "field error" : "field"} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
          {formData.errors.email && <p className="error">{formData.errors.email}</p>}
        </Form.Group>
        <Form.Group className={formData.errors.message ? "field error" : "field"} controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
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