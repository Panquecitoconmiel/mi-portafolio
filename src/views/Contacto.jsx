// src/views/Contacto.jsx
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt, FaLayerGroup, FaPhone } from 'react-icons/fa';
import { MdOutlineCheckCircle, MdErrorOutline } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { plans, planById } from '../data/precios';
import { EMAIL, whatsappLink } from '../data/contacto';

const Contacto = () => {
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
      ? `Hola Michelle, me interesa el paquete "${selected.name}"`
      : 'Hola Michelle, quiero cotizar una página web'
  );

  // Reúne los datos del formulario en un solo objeto
  const buildParams = () => {
    const data = new FormData(form.current);
    const servicio = selected ? `${selected.name} (desde $${selected.price} MXN)` : 'Otro / no estoy segur@';
    const telefono = data.get('user_phone') || 'No proporcionado';

    // El servicio y teléfono se agregan al mensaje para que lleguen
    // aunque la plantilla de EmailJS solo tenga nombre, correo y mensaje.
    return {
      user_name: data.get('user_name'),
      user_email: data.get('user_email'),
      user_phone: telefono,
      plan: servicio,
      message: `Servicio de interés: ${servicio}\nTeléfono / WhatsApp: ${telefono}\n\n${data.get('message')}`,
    };
  };

  // Opción 1: enviar por correo (EmailJS)
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus('');
    setStatusType('');
    const params = buildParams();

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
        setMessageStatus(
          whatsappLink()
            ? 'No se pudo enviar por correo. Usa el botón de WhatsApp, tu mensaje ya va escrito.'
            : 'Error al enviar. Intenta de nuevo más tarde.'
        );
        console.error(error?.text || error);
      })
      .finally(() => setIsSending(false));
  };

  // Opción 2: enviar por WhatsApp con el mensaje ya escrito
  const sendWhatsApp = () => {
    if (!form.current.reportValidity()) return;
    const params = buildParams();
    const link = whatsappLink(
      `Hola Michelle, soy ${params.user_name} (${params.user_email}).\n${params.message}`
    );
    if (link) window.open(link, '_blank', 'noopener');
  };

  return (
    <div className="contact-view">
      <p className="view-intro">
        ¿Tienes un proyecto en mente? Cuéntame qué necesitas y te envío una propuesta sin compromiso.
      </p>

      <div className="contact-cards">
        {wa && (
          <a href={wa} target="_blank" rel="noreferrer" className="contact-card wa">
            <FaWhatsapp size={18} />
            <span><small>WhatsApp</small>Escríbeme directo</span>
          </a>
        )}
        {EMAIL && (
          <a href={`mailto:${EMAIL}`} className="contact-card">
            <FaEnvelope size={16} />
            <span><small>Correo</small>{EMAIL}</span>
          </a>
        )}
        <div className="contact-card">
          <FaClock size={16} />
          <span><small>Respuesta</small>Menos de 24 horas</span>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt size={16} />
          <span><small>Ubicación</small>Remoto en todo México</span>
        </div>
      </div>

      {selected && (
        <p className="selected-plan">
          <FaLayerGroup size={12} /> Paquete elegido: <strong>{selected.name}</strong> · desde ${selected.price} MXN
        </p>
      )}

      <form ref={form} onSubmit={sendEmail} className="os-form">
        <div className="form-row">
          <div className="field">
            <label htmlFor="user_name"><FaUser size={11} /> Nombre</label>
            <input type="text" id="user_name" name="user_name" placeholder="Tu nombre completo" required />
          </div>
          <div className="field">
            <label htmlFor="user_email"><FaEnvelope size={11} /> Correo electrónico</label>
            <input type="email" id="user_email" name="user_email" placeholder="tucorreo@ejemplo.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="user_phone"><FaPhone size={11} /> Teléfono / WhatsApp <span className="muted">(opcional)</span></label>
            <input type="tel" id="user_phone" name="user_phone" placeholder="55 1234 5678" />
          </div>
          <div className="field">
            <label htmlFor="plan"><FaLayerGroup size={11} /> Servicio de interés</label>
            <select id="plan" name="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
              <option value="">Otro / no estoy segur@</option>
              {plans.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Cuéntame de tu proyecto</label>
          <textarea id="message" name="message" rows="4" placeholder="¿A qué se dedica tu negocio? ¿Qué te gustaría que tuviera tu página?" required />
        </div>

        <div className="send-options">
          <button type="submit" disabled={isSending} className="btn btn-sage">
            <FaEnvelope /> {isSending ? 'Enviando...' : 'Enviar por correo'}
          </button>
          {whatsappLink() && (
            <button type="button" className="btn btn-wa" onClick={sendWhatsApp}>
              <FaWhatsapp size={16} /> Enviar por WhatsApp
            </button>
          )}
        </div>

        {messageStatus && (
          <p role="status" className={`form-status ${statusType}`}>
            {statusType === 'success' ? <MdOutlineCheckCircle size={20} /> : <MdErrorOutline size={20} />}
            {messageStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacto;
