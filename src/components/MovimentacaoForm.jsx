import React, { useState } from 'react';

export default function MovimentacaoForm({ onSubmit, movimentacao }) {
  const [idproduto, setIdproduto] = useState(movimentacao?.idproduto || "");
  const [idusuario, setIdusuario] = useState(movimentacao?.idusuario || "");
  const [entrada, setEntrada] = useState(movimentacao?.entrada || "");
  const [saida, setSaida] = useState(movimentacao?.saida || "");
  const [entradaData, setEntradaData] = useState(movimentacao?.entrada_data || "");
  const [saidaData, setSaidaData] = useState(movimentacao?.saida_data || "");

  const [erros, setErros] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const novosErros = {};
    if (!idproduto) novosErros.idproduto = "Produto é obrigatório";
    if (!idusuario) novosErros.idusuario = "Usuário é obrigatório";
    if (!entrada && !saida) novosErros.movimentacao = "Informe entrada ou saída";

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    onSubmit({
      idproduto,
      idusuario,
      entrada,
      saida,
      entrada_data: entradaData,
      saida_data: saidaData,
    });
  };

  return (
    <form onSubmit={handleSubmit} role="form">
      <div>
        <label htmlFor="idproduto">Produto</label>
        <input
          id="idproduto"
          value={idproduto}
          onChange={(e) => setIdproduto(e.target.value)}
        />
        {erros.idproduto && <span>{erros.idproduto}</span>}
      </div>

      <div>
        <label htmlFor="idusuario">Usuário</label>
        <input
          id="idusuario"
          value={idusuario}
          onChange={(e) => setIdusuario(e.target.value)}
        />
        {erros.idusuario && <span>{erros.idusuario}</span>}
      </div>

      <div>
        <label htmlFor="entrada">Entrada (qtd)</label>
        <input
          id="entrada"
          type="number"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="saida">Saída (qtd)</label>
        <input
          id="saida"
          type="number"
          value={saida}
          onChange={(e) => setSaida(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="entradaData">Data de Entrada</label>
        <input
          id="entradaData"
          type="date"
          value={entradaData}
          onChange={(e) => setEntradaData(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="saidaData">Data de Saída</label>
        <input
          id="saidaData"
          type="date"
          value={saidaData}
          onChange={(e) => setSaidaData(e.target.value)}
        />
      </div>

      {erros.movimentacao && <span>{erros.movimentacao}</span>}

      <button type="submit">Registrar</button>
    </form>
  );
}
