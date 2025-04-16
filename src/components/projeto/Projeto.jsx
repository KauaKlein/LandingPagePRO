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
        <h2>Nosso Projeto Incrível</h2>
       

        <section className="pitch">
          <h3>💡 O Problema</h3>
          <p>
            Muitos estudantes enfrentam dificuldades em organizar seus estudos e acompanhar o progresso acadêmico de forma eficiente.
          </p>

          <h3>🚀 Nossa Solução</h3>
          <p>
            Criamos uma plataforma intuitiva que permite aos alunos montar cronogramas, receber lembretes e visualizar seu desempenho em tempo real.
          </p>
        </section>

        <section className="midia">
          <h3>🎥 Protótipo em vídeo</h3>
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

