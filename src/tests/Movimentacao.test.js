import { fireEvent, render, screen } from '@testing-library/react';
import MovimentacaoForm from '../components/MovimentacaoForm';

test('renderiza inputs de movimentação', () => {
  render(<MovimentacaoForm />);

  expect(screen.getByLabelText(/produto/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/entrada \(qtd\)/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/saída \(qtd\)/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/data de entrada/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/data de saída/i)).toBeInTheDocument();
});

test('chama onSubmit com dados corretos', () => {
  const handleSubmit = jest.fn();
  render(<MovimentacaoForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/produto/i), { target: { value: '1' } });
  fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/entrada \(qtd\)/i), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText(/data de entrada/i), { target: { value: '2025-09-03' } });

  fireEvent.submit(screen.getByRole('form'));

  expect(handleSubmit).toHaveBeenCalledWith({
    idproduto: '1',
    idusuario: '2',
    entrada: '5',
    saida: '',
    entrada_data: '2025-09-03',
    saida_data: '',
  });
});

test('atualiza movimentação existente', () => {
  const handleSubmit = jest.fn();
  const movExistente = {
    idproduto: '1',
    idusuario: '2',
    entrada: '3',
    saida: '',
    entrada_data: '2025-09-01',
    saida_data: '',
  };

  render(<MovimentacaoForm movimentacao={movExistente} onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/entrada \(qtd\)/i), { target: { value: '10' } });
  fireEvent.submit(screen.getByRole('form'));

  expect(handleSubmit).toHaveBeenCalledWith({
    ...movExistente,
    entrada: '10',
  });
});

test('valida que produto e usuário são obrigatórios e deve informar entrada ou saída', () => {
  const handleSubmit = jest.fn();
  render(<MovimentacaoForm onSubmit={handleSubmit} />);

  fireEvent.submit(screen.getByRole('form'));

  expect(screen.getByText(/produto é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/usuário é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/informe entrada ou saída/i)).toBeInTheDocument();
  expect(handleSubmit).not.toHaveBeenCalled();
});
