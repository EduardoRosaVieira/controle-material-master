import { render, screen, fireEvent } from '@testing-library/react';
import CadastroFornecedor from '../components/CadastroFornecedor';

describe('CadastroFornecedor', () => {
  test('renderiza o formulário de cadastro de fornecedor', () => {
    render(<CadastroFornecedor />);
    expect(screen.getByLabelText(/ID Fornecedor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CNPJ/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  test('permite preencher e submeter o formulário de fornecedor', () => {
    render(<CadastroFornecedor />);
    fireEvent.change(screen.getByLabelText(/ID Fornecedor/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Fornecedor X' } });
    fireEvent.change(screen.getByLabelText(/CNPJ/i), { target: { value: '12.345.678/0001-99' } });
    fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '11999999999' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'fornecedor@email.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
    expect(screen.getByText(/Fornecedor cadastrado com sucesso!/i)).toBeInTheDocument();
  });
});
