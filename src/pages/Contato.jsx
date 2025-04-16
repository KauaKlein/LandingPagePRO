import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contato() {
  return (
    <div className="contato">
      <div className='contato-container'>
        <h2>Minhas Redes:</h2>
        <div className="redes">
          <a href="https://instagram.com/kauakleiin" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />Instagram
          </a>
          <a href="https://github.com/KauaKlein" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
