import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Asistencia UTEQ</h1>
        <p>Actualmente, solo puedes ver la página de divisiones.</p>
        <Link to="/dashboard">
          <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Ver Divisiones
          </button>
        </Link>
      </header>
    </div>
  );
}
