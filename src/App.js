import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Controle de Usuários</h1>
      <CadastroUsuarios />
      <ListaUsuarios />
    </div>
  );
}

export default App;
