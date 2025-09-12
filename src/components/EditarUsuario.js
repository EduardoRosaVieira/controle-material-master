import React, { useState } from 'react';

function EditarUsuario({ usuario, onSave }) {
  const [form, setForm] = useState({ ...usuario });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSave) {
      await onSave(form);
    }
    setMensagem('Usuário editado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID Usuário
        <input name="id" value={form.id} onChange={handleChange} readOnly />
      </label>
      <label>
        Matrícula
        <input name="matricula" value={form.matricula} onChange={handleChange} />
      </label>
      <label>
        Nome
        <input name="nome" value={form.nome} onChange={handleChange} />
      </label>
      <label>
        Telefone
        <input name="telefone" value={form.telefone} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Senha
        <input name="senha" type="password" value={form.senha} onChange={handleChange} />
      </label>
      <label>
        ID Perfil
        <input name="id_perfil" value={form.id_perfil} onChange={handleChange} />
      </label>
      <button type="submit">Salvar</button>
      {mensagem && <div>{mensagem}</div>}
    </form>
  );
}

export default EditarUsuario;
