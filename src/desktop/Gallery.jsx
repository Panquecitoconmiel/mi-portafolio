// src/desktop/Gallery.jsx
// Carrusel de capturas con miniaturas. Al dar clic se abre un álbum a pantalla completa.
import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';

const Gallery = ({ images = [], title = '' }) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const total = images.length;

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  // Teclado dentro del álbum: flechas para navegar y Esc para cerrar (sin cerrar la ventana)
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); setOpen(false); }
      if (e.key === 'ArrowRight') { e.stopPropagation(); go(1); }
      if (e.key === 'ArrowLeft') { e.stopPropagation(); go(-1); }
    };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [open, go]);

  if (!total) return null;
  const current = images[index];

  return (
    <div className="gallery">
      <figure className="project-shot gallery-main">
        <div className="shot-bar" aria-hidden="true">
          <i /><i /><i />
          <span className="shot-count">{index + 1} / {total}</span>
        </div>
        <button className="gallery-stage" onClick={() => setOpen(true)} aria-label="Abrir álbum de capturas">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.caption || title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
            />
          </AnimatePresence>
          <span className="gallery-zoom"><FaExpand size={11} /> ver álbum</span>
        </button>
        {total > 1 && (
          <>
            <button className="gallery-arrow prev" onClick={() => go(-1)} aria-label="Captura anterior"><FaChevronLeft /></button>
            <button className="gallery-arrow next" onClick={() => go(1)} aria-label="Siguiente captura"><FaChevronRight /></button>
          </>
        )}
      </figure>

      {current.caption && <p className="gallery-caption">{current.caption}</p>}

      {total > 1 && (
        <div className="gallery-thumbs" role="tablist" aria-label="Capturas">
          {images.map((img, i) => (
            <button
              key={img.src}
              role="tab"
              aria-selected={i === index}
              aria-label={`Captura ${i + 1}`}
              className={`gallery-thumb${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <img src={img.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Álbum de ${title}`}
            >
              <motion.div
                className="lightbox-window"
                initial={{ scale: 0.92, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="titlebar">
                  <div className="dots">
                    <button className="dot red" onClick={() => setOpen(false)} aria-label="Cerrar álbum" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="win-title">{title.toLowerCase()} · {index + 1}/{total}</span>
                  <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Cerrar"><FaTimes /></button>
                </div>
                <div className="lightbox-stage">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={current.src}
                      src={current.src}
                      alt={current.caption || title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>
                  {total > 1 && (
                    <>
                      <button className="gallery-arrow prev big" onClick={() => go(-1)} aria-label="Anterior"><FaChevronLeft /></button>
                      <button className="gallery-arrow next big" onClick={() => go(1)} aria-label="Siguiente"><FaChevronRight /></button>
                    </>
                  )}
                </div>
                {current.caption && <p className="lightbox-caption">{current.caption}</p>}
                {total > 1 && (
                  <div className="gallery-thumbs center">
                    {images.map((img, i) => (
                      <button
                        key={img.src}
                        className={`gallery-thumb${i === index ? ' active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Captura ${i + 1}`}
                      >
                        <img src={img.src} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Gallery;
