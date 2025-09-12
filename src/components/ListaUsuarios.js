import React, { useState, useEffect } from 'react';
import { getUsuarios, deleteUsuario, updateUsuario } from '../services/supabase';
import EditarUsuario from './EditarUsuario';


function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    async function fetchUsuarios() {
      setLoading(true);
      const lista = await getUsuarios();
      setUsuarios(lista || []);
      setLoading(false);
    }
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      await deleteUsuario(id);
      setUsuarios(usuarios.filter(u => u.id !== id));
    }
  };

  const handleEdit = (usuario) => {
    setEditando(usuario);
  };

  const handleSave = async (dadosEditados) => {
    await updateUsuario(dadosEditados);
    setUsuarios(usuarios.map(u => u.id === dadosEditados.id ? { ...u, ...dadosEditados } : u));
    setEditando(null);
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {editando ? (
        <EditarUsuario usuario={editando} onSave={handleSave} />
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>
                  <button onClick={() => handleEdit(usuario)} style={{ color: 'blue', marginRight: 8 }}>
                    Editar
                  </button>
                  <button onClick={() => handleDelete(usuario.id)} style={{ color: 'red' }}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaUsuarios;
