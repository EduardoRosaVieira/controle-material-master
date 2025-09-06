import { fireEvent, render, screen } from '@testing-library/react';
import ProdutoForm from '../components/ProdutoForm';

test('renderiza inputs do produto', () => {
  render(<ProdutoForm />);

  expect(screen.getByLabelText(/código/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/quantidade/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/validade/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/local/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/tipo/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/fornecedor/i)).toBeInTheDocument();
});

test('chama onSubmit com dados corretos', () => {
  const handleSubmit = jest.fn();
  render(<ProdutoForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/código/i), { target: { value: 'C123' } });
  fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Notebook' } });
  fireEvent.change(screen.getByLabelText(/quantidade/i), { target: { value: '10' } });
  fireEvent.change(screen.getByLabelText(/validade/i), { target: { value: '2025-12-31' } });
  fireEvent.change(screen.getByLabelText(/local/i), { target: { value: 'Estoque A' } });
  fireEvent.change(screen.getByLabelText(/tipo/i), { target: { value: '1' } });
  fireEvent.change(screen.getByLabelText(/fornecedor/i), { target: { value: '1' } });

  fireEvent.submit(screen.getByRole('form'));

  expect(handleSubmit).toHaveBeenCalledWith({
    codigo: 'C123',
    nome: 'Notebook',
    quantidade: '10',
    validade: '2025-12-31',
    local: 'Estoque A',
    idtipo: '1',
    idfornecedor: '1',
  });
});

test('atualiza produto existente', () => {
  const handleSubmit = jest.fn();
  const produtoExistente = {
    codigo: 'C123',
    nome: 'Notebook',
    quantidade: '5',
    validade: '2025-12-31',
    local: 'Estoque A',
    idtipo: '1',
    idfornecedor: '1'
  };

  render(<ProdutoForm produto={produtoExistente} onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Notebook' } });
  fireEvent.submit(screen.getByRole('form'));

  expect(handleSubmit).toHaveBeenCalledWith({
    ...produtoExistente,
    nome: 'Notebook'
  });
});

test('valida que campos obrigatórios foram preenchidos', () => {
  const handleSubmit = jest.fn();
  render(<ProdutoForm onSubmit={handleSubmit} />);

  fireEvent.submit(screen.getByRole('form'));

  expect(screen.getByText(/código é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/quantidade é obrigatória/i)).toBeInTheDocument();
  expect(screen.getByText(/tipo é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/fornecedor é obrigatório/i)).toBeInTheDocument();
  expect(handleSubmit).not.toHaveBeenCalled();
});
