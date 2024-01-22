import React, { useState } from 'react'

const Form = () => {
  // form state
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

    if (Object.keys(errors).length === 0) {
      // Form is valid, perform submission logic
      console.log(formData);
    } else {
      // Update form state with validation errors
      setFormData({ ...formData, errors });
    }
  };

  // input change handler
  const handleChange = (event) => {
    const { name, value, type} = event.target;
    console.log(event.target, name, value, type);
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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default Form