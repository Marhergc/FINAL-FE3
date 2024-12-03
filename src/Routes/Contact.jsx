import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (formData.name.length < 5) {
      setFormError('El nombre debe tener al menos 5 caracteres.');
      return false;
    }
    if (!formData.email.includes('@')) {
      setFormError('El correo debe ser válido.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos lo antes posible vía correo.`);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <main className="contact">
      <h1>Contactanos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {formError && <p className="error">{formError}</p>}
        <button type="submit">Enviar</button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </main>
  );
};

export default Contact;
