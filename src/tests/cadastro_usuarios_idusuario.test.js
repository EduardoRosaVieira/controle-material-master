beforeAll(() => {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
});
import { render, screen, fireEvent } from '@testing-library/react';
import CadastroUsuarios from '../components/CadastroUsuarios';
import EditarUsuario from '../components/EditarUsuario';

describe('CadastroUsuarios', () => {
  test('renderiza o formulário de cadastro de usuários', () => {
    render(<CadastroUsuarios />);
    expect(screen.getByLabelText(/ID Usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Matrícula/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ID Perfil/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  test('permite preencher e submeter o formulário de usuários', () => {
    render(<CadastroUsuarios />);
    fireEvent.change(screen.getByLabelText(/ID Usuário/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/Matrícula/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Maria' } });
    fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '11999999999' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'maria@email.com' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'senha123' } });
    fireEvent.change(screen.getByLabelText(/ID Perfil/i), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
    expect(screen.getByText(/Usuário cadastrado com sucesso!/i)).toBeInTheDocument();
  });
});

describe('EditarUsuario', () => {
  test('renderiza o formulário de edição de usuário', () => {
    const usuario = {
      id: 1,
      matricula: '12345',
      nome: 'Maria',
      telefone: '11999999999',
      email: 'maria@email.com',
      senha: 'senha123',
      id_perfil: 2
    };
    render(<EditarUsuario usuario={usuario} />);
    expect(screen.getByLabelText(/ID Usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Matrícula/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ID Perfil/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Salvar/i })).toBeInTheDocument();
  });

  test('permite editar e salvar dados do usuário', () => {
    const usuario = {
      id: 1,
      matricula: '12345',
      nome: 'Maria',
      telefone: '11999999999',
      email: 'maria@email.com',
      senha: 'senha123',
      id_perfil: 2
    };
    render(<EditarUsuario usuario={usuario} />);
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Maria Editada' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'editada@email.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Salvar/i }));
    expect(screen.getByText(/Usuário editado com sucesso!/i)).toBeInTheDocument();
  });
});
