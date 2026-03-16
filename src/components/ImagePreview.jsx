import React, { useState } from 'react';

export default function ImagePreview({ src, alt, previewWidth = 200 }) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ width: previewWidth, cursor: 'pointer', borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.8)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          onClick={() => setOpen(false)}
        >
          <img src={src} alt={alt} style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 8 }} />
        </div>
      )}
    </>
  );
}
