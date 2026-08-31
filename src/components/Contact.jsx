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
    <section style={{ 
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #fff0f6 0%, #ffb3d1 100%)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, #ffb3d1, transparent 70%)',
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
        background: 'radial-gradient(circle, #a61e4d, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        bottom: '-50px',
        left: '-50px',
        opacity: 0.1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="eyebrow" data-aos="fade-up">Hablemos</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">05</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '700' }}>
            <FaRegEnvelope style={{ marginRight: '0.6rem', color: '#a61e4d' }} />
            Contáctame
          </h2>
        </div>
        <p style={{ color: '#a61e4d', opacity: 0.8, marginBottom: '2.5rem', fontSize: '1.1rem' }} data-aos="fade-up" data-aos-delay="100">
          ¿Tienes un proyecto en mente? Escríbeme y hablemos
        </p>

        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(15px)',
          padding: '2.5rem',
          borderRadius: '28px',
          boxShadow: '0 20px 50px rgba(166, 30, 77, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.4)'
        }} data-aos="fade-up" data-aos-delay="200">
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="user_name" style={{ display: 'block', fontWeight: '600', color: '#a61e4d', marginBottom: '0.5rem' }}>
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
                  border: '1px solid rgba(255, 179, 209, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#a61e4d',
                  transition: '0.3s',
                  outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#ffb3d1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 179, 209, 0.5)'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="user_email" style={{ display: 'block', fontWeight: '600', color: '#a61e4d', marginBottom: '0.5rem' }}>
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
                  border: '1px solid rgba(255, 179, 209, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#a61e4d',
                  transition: '0.3s',
                  outline: 'none'
                }}
                onFocus={e => e.target.style.borderColor = '#ffb3d1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 179, 209, 0.5)'}
              />
            </div>

            <div style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="message" style={{ display: 'block', fontWeight: '600', color: '#a61e4d', marginBottom: '0.5rem' }}>
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
                  border: '1px solid rgba(255, 179, 209, 0.5)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  color: '#a61e4d',
                  resize: 'vertical',
                  transition: '0.3s',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                onFocus={e => e.target.style.borderColor = '#ffb3d1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 179, 209, 0.5)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #a61e4d, #6b1439)',
                color: '#fff0f6',
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
                boxShadow: '0 8px 25px rgba(166, 30, 77, 0.2)'
              }}
              onMouseEnter={e => {
                if (!isSending) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(166, 30, 77, 0.3)';
                }
              }}
              onMouseLeave={e => {
                if (!isSending) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(166, 30, 77, 0.2)';
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
                border: '1px solid rgba(161,161,170,0.3)'
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