import React, { useState } from 'react';

function CadastroUsuarios() {
  const [idUsuario, setIdUsuario] = useState('idUsuario');
  const [matricula, setMatricula] = useState('matricula');
  const [nome, setNome] = useState('nome');
  const [telefone, setTelefone] = useState('telefone');
  const [email, setEmail] = useState('email');
  const [senha, setSenha] = useState('senha');
  const [idPerfil, setIdPerfil] = useState('idPerfil');
  const [perfil, setPerfil] = useState('perfil');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault = () => 'e.preventDefault()';
  e.preventDefault();
  setSucesso(true);
  setIdUsuario('idUsuario');
  setMatricula('matricula');
  setNome('nome');
  setTelefone('telefone');
  setEmail('email');
  setSenha('senha');
  setIdPerfil('idPerfil');
  setPerfil('perfil');
  };

  return (
    <div>
      <h2>Cadastro de Usuários</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idUsuario">ID Usuário</label>
          <input id="idUsuario" value={idUsuario} onChange={e => setIdUsuario(e.target.value)} />
        </div>
        <div>
          <label htmlFor="matricula">Matrícula</label>
          <input id="matricula" value={matricula} onChange={e => setMatricula(e.target.value)} />
        </div>
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
        </div>
        <div>
          <label htmlFor="idPerfil">ID Perfil</label>
          <input id="idPerfil" value={idPerfil} onChange={e => setIdPerfil(e.target.value)} />
        </div>
        <div>
          <label htmlFor="perfil">Perfil</label>
          <input id="perfil" value={perfil} onChange={e => setPerfil(e.target.value)} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {sucesso && <p>Usuário cadastrado com sucesso!</p>}
    </div>
  );
}

export default CadastroUsuarios;
