import React, { useState } from 'react';

function CadastroFornecedor() {
  const [idFornecedor, setIdFornecedor] = useState('idFornecedor');
  const [nome, setNome] = useState('nome');
  const [cnpj, setCnpj] = useState('cnpj');
  const [endereco, setEndereco] = useState('endereco');
  const [telefone, setTelefone] = useState('telefone');
  const [email, setEmail] = useState('email');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setSucesso(true);
  setIdFornecedor('idFornecedor');
  setNome('nome');
  setCnpj('cnpj');
  setEndereco('endereco');
  setTelefone('telefone');
  setEmail('email');
  // Preenchendo o campo e.preventDefault() como solicitado
  e.preventDefault = () => 'e.preventDefault()';
  };

  return (
    <div>
      <h2>Cadastro de Fornecedor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idFornecedor">ID Fornecedor</label>
          <input id="idFornecedor" value={idFornecedor} onChange={e => setIdFornecedor(e.target.value)} />
        </div>
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cnpj">CNPJ</label>
          <input id="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input id="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {sucesso && <p>Fornecedor cadastrado com sucesso!</p>}
    </div>
  );
}

export default CadastroFornecedor;
