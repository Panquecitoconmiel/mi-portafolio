// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPaperPlane, FaWhatsapp, FaClock, FaMapMarkerAlt, FaLayerGroup, FaPhone } from 'react-icons/fa';
import { MdOutlineCheckCircle, MdErrorOutline } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { plans, planById } from '../data/precios';
import { EMAIL, whatsappLink } from '../data/contacto';

const Contact = () => {
  const form = useRef();
  const [searchParams] = useSearchParams();
  const initialPlan = planById(searchParams.get('plan'))?.id ?? '';

  const [plan, setPlan] = useState(initialPlan);
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const selected = planById(plan);
  const wa = whatsappLink(
    selected
      ? `Hola Michelle, me interesa el paquete "${selected.name}" ✨`
      : 'Hola Michelle, quiero cotizar una página web ✨'
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus('');
    setStatusType('');

    const data = new FormData(form.current);
    const servicio = selected ? `${selected.name} (desde $${selected.price} MXN)` : 'Otro / no estoy segur@';
    const telefono = data.get('user_phone') || 'No proporcionado';

    // El servicio y teléfono se agregan al mensaje para que lleguen
    // aunque la plantilla de EmailJS solo tenga nombre, correo y mensaje.
    const params = {
      user_name: data.get('user_name'),
      user_email: data.get('user_email'),
      user_phone: telefono,
      plan: servicio,
      message: `Servicio de interés: ${servicio}\nTeléfono / WhatsApp: ${telefono}\n\n${data.get('message')}`,
    };

    emailjs
      .send('service_b688zfe', 'template_e4o4bid', params, 'SXN0-kx2b9qIMXOLQ')
      .then(() => {
        setStatusType('success');
        setMessageStatus('¡Mensaje enviado! Te responderé en menos de 24 horas.');
        form.current.reset();
        setPlan('');
      })
      .catch((error) => {
        setStatusType('error');
        setMessageStatus('Error al enviar. Intenta de nuevo más tarde.');
        console.error(error?.text || error);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section style={{ background: 'var(--section-bg)', overflow: 'hidden' }}>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      <div className="container">
        <div className="eyebrow" data-aos="fade-up">Hablemos</div>
        <div className="section-head" data-aos="fade-up">
          <span className="index-num">06</span>
          <h2>
            Cotiza tu <span className="gradient-text">página web</span>
          </h2>
        </div>
        <p className="section-lead" data-aos="fade-up" data-aos-delay="100">
          ¿Tienes un proyecto en mente? Cuéntame qué necesitas y te envío una propuesta
          personalizada, sin compromiso.
        </p>

        <div className="contact-layout">
          <aside className="contact-aside" data-aos="fade-up" data-aos-delay="150">
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="contact-method">
                <span className="cm-icon wa"><FaWhatsapp size={22} /></span>
                <span>
                  <span className="cm-label">WhatsApp</span>
                  <span className="cm-value" style={{ display: 'block' }}>Escríbeme directo</span>
                </span>
              </a>
            )}
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className="contact-method">
                <span className="cm-icon"><FaEnvelope size={19} /></span>
                <span>
                  <span className="cm-label">Correo</span>
                  <span className="cm-value" style={{ display: 'block' }}>{EMAIL}</span>
                </span>
              </a>
            )}
            <div className="contact-method">
              <span className="cm-icon"><FaClock size={19} /></span>
              <span>
                <span className="cm-label">Tiempo de respuesta</span>
                <span className="cm-value" style={{ display: 'block' }}>Menos de 24 horas</span>
              </span>
            </div>
            <div className="contact-method">
              <span className="cm-icon"><FaMapMarkerAlt size={19} /></span>
              <span>
                <span className="cm-label">Ubicación</span>
                <span className="cm-value" style={{ display: 'block' }}>CDMX · Trabajo remoto en todo México</span>
              </span>
            </div>
            {selected && (
              <div className="contact-method" style={{ background: 'var(--grad-primary)', border: 'none' }}>
                <span className="cm-icon" style={{ background: 'rgba(255,255,255,0.25)' }}><FaLayerGroup size={18} /></span>
                <span>
                  <span className="cm-label" style={{ color: '#fff', opacity: 0.85 }}>Paquete elegido</span>
                  <span className="cm-value" style={{ display: 'block', color: '#fff' }}>
                    {selected.name} · desde ${selected.price}
                  </span>
                </span>
              </div>
            )}
          </aside>

          <div className="form-card" data-aos="fade-up" data-aos-delay="200">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="user_name"><FaUser size={12} /> Nombre</label>
                  <input type="text" id="user_name" name="user_name" placeholder="Tu nombre completo" required />
                </div>
                <div className="field">
                  <label htmlFor="user_email"><FaEnvelope size={12} /> Correo electrónico</label>
                  <input type="email" id="user_email" name="user_email" placeholder="tucorreo@ejemplo.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="user_phone"><FaPhone size={12} /> Teléfono / WhatsApp <span style={{ opacity: 0.55, fontWeight: 500 }}>(opcional)</span></label>
                  <input type="tel" id="user_phone" name="user_phone" placeholder="55 1234 5678" />
                </div>
                <div className="field">
                  <label htmlFor="plan"><FaLayerGroup size={12} /> Servicio de interés</label>
                  <select id="plan" name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
                    <option value="">Otro / no estoy segur@</option>
                    {plans.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Cuéntame de tu proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="¿A qué se dedica tu negocio? ¿Qué te gustaría que tuviera tu página?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary"
                style={{ width: '100%', fontSize: '1.05rem', opacity: isSending ? 0.7 : 1 }}
              >
                <FaPaperPlane /> {isSending ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {messageStatus && (
                <p
                  role="status"
                  style={{
                    marginTop: '1.2rem',
                    textAlign: 'center',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    color: statusType === 'success' ? '#2e7d32' : '#c62828',
                    background: '#fff',
                    padding: '0.8rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 127, 163,0.2)',
                  }}
                >
                  {statusType === 'success' ? <MdOutlineCheckCircle size={22} /> : <MdErrorOutline size={22} />}
                  {messageStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
