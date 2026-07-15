// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaRegEnvelope } from 'react-icons/fa';
import { MdOutlineCheckCircle, MdErrorOutline } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus('');
    setStatusType('');

    // Tus credenciales actualizadas
    const serviceID = 'service_b688zfe';
    const templateID = 'template_e4o4bid';
    const publicKey = 'SXN0-kx2b9qIMXOLQ';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatusType('success');
        setMessageStatus('Mensaje enviado con éxito. Te responderé pronto.');
        form.current.reset();
      })
      .catch((error) => {
        setStatusType('error');
        setMessageStatus('Error al enviar. Intenta de nuevo más tarde.');
        console.error(error.text);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contacto" style={{ 
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #FFF1B5 0%, #C1DBE8 100%)',
      position: 'relative'
    }}>
      {/* Formas decorativas */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, #C1DBE8, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        top: '-80px',
        right: '-80px',
        opacity: 0.4,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, #43302E, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        bottom: '-50px',
        left: '-50px',
        opacity: 0.1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.5rem' }}>
          <FaRegEnvelope style={{ marginRight: '0.8rem', color: '#43302E' }} />
          Contáctame
        </h2>
        <p style={{ textAlign: 'center', color: '#43302E', opacity: 0.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          ¿Tienes un proyecto en mente? Escríbeme y hablemos
        </p>

        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(15px)',
          padding: '2.5rem',
          borderRadius: '28px',
          boxShadow: '0 20px 50px rgba(67, 48, 46, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }}>
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="user_name" style={{ display: 'block', fontWeight: '600', color: '#43302E', marginBottom: '0.5rem' }}>
                <FaUser style={{ marginRight: '0.5rem' }} /> Nombre
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Tu nombre completo"
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(193, 219, 232, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#43302E',
                  transition: '0.3s',
                  outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#C1DBE8'}
                onBlur={e => e.target.style.borderColor = 'rgba(193, 219, 232, 0.5)'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="user_email" style={{ display: 'block', fontWeight: '600', color: '#43302E', marginBottom: '0.5rem' }}>
                <FaEnvelope style={{ marginRight: '0.5rem' }} /> Correo electrónico
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="tucorreo@ejemplo.com"
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '50px',
                  border: '1px solid rgba(193, 219, 232, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#43302E',
                  transition: '0.3s',
                  outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#C1DBE8'}
                onBlur={e => e.target.style.borderColor = 'rgba(193, 219, 232, 0.5)'}
              />
            </div>

            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="message" style={{ display: 'block', fontWeight: '600', color: '#43302E', marginBottom: '0.5rem' }}>
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Cuéntame sobre tu proyecto, idea o duda..."
                required
                style={{
                  width: '100%',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(193, 219, 232, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#43302E',
                  resize: 'vertical',
                  transition: '0.3s',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                onFocus={e => e.target.style.borderColor = '#C1DBE8'}
                onBlur={e => e.target.style.borderColor = 'rgba(193, 219, 232, 0.5)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #43302E, #5a4542)',
                color: '#FFF1B5',
                fontWeight: '700',
                fontSize: '1.1rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                cursor: isSending ? 'not-allowed' : 'pointer',
                opacity: isSending ? 0.7 : 1,
                transition: '0.3s',
                boxShadow: '0 8px 25px rgba(67, 48, 46, 0.2)'
              }}
              onMouseEnter={e => {
                if (!isSending) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(67, 48, 46, 0.3)';
                }
              }}
              onMouseLeave={e => {
                if (!isSending) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(67, 48, 46, 0.2)';
                }
              }}
            >
              <FaPaperPlane /> {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {messageStatus && (
              <p style={{
                marginTop: '1.2rem',
                textAlign: 'center',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                color: statusType === 'success' ? '#2e7d32' : '#c62828',
                background: 'rgba(255,255,255,0.8)',
                padding: '0.8rem',
                borderRadius: '50px',
                border: '1px solid rgba(193,219,232,0.3)'
              }}>
                {statusType === 'success' ? <MdOutlineCheckCircle size={22} /> : <MdErrorOutline size={22} />}
                {messageStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;