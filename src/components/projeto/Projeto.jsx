import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';


export default function Projeto() {
  const pdfRef = useRef();
  const [exportando, setExportando] = useState(false);

  const DownloadPDF = () => {
    setExportando(true); 

    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: 'projeto-senai.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .finally(() => setExportando(false));
  };

  return (
    <div className="projeto">
      <div 
        className={`projeto-container ${exportando ? 'exportando' : ''}`} 
        ref={pdfRef}
      >
        <h1>Landing Page</h1>
       

        <section className="section">
          <h3>Transformando Ideias em Soluções Digitais😎</h3>
          <p>
          Impulsionamos a inovação com tecnologia de ponta, criando experiências digitais que conectam pessoas e negócios.
          </p>
        </section>

        <section className="midia">
          <h3>Protótipo em vídeo🎞️</h3>
          <div className="video-container">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Protótipo do Projeto" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <button onClick={DownloadPDF} className="btn-pdf no-print">
          📄 Exportar PDF
        </button>
      </div>
    </div>
  );
}

