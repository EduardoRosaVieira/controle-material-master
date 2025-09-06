import React, { useState } from 'react';

export default function ProdutoForm({ onSubmit, produto }) {
    const [codigo, setCodigo] = useState(produto?.codigo || "");
    const [nome, setNome] = useState(produto?.nome || "");
    const [quantidade, setQuantidade] = useState(produto?.quantidade || "");
    const [validade, setValidade] = useState(produto?.validade || "");
    const [local, setLocal] = useState(produto?.local || "");
    const [idtipo, setIdtipo] = useState(produto?.idtipo || "");
    const [idfornecedor, setIdfornecedor] = useState(produto?.idfornecedor || "");

    const [erros, setErros] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const novosErros = {};
        if (!codigo) novosErros.codigo = "Código é obrigatório";
        if (!nome) novosErros.nome = "Nome é obrigatório";
        if (!quantidade) novosErros.quantidade = "Quantidade é obrigatória";
        if (!idtipo) novosErros.idtipo = "Tipo é obrigatório";
        if (!idfornecedor) novosErros.idfornecedor = "Fornecedor é obrigatório";

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        onSubmit({ codigo, nome, quantidade, validade, local, idtipo, idfornecedor });
    };

    return (
        <form onSubmit={handleSubmit} role="form">
            <div>
                <label htmlFor="codigo">Código</label>
                <input
                    id="codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />
                {erros.codigo && <span>{erros.codigo}</span>}
            </div>

            <div>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                {erros.nome && <span>{erros.nome}</span>}
            </div>

            <div>
                <label htmlFor="quantidade">Quantidade</label>
                <input
                    id="quantidade"
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                />
                {erros.quantidade && <span>{erros.quantidade}</span>}
            </div>

            <div>
                <label htmlFor="validade">Validade</label>
                <input
                    id="validade"
                    type="date"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="local">Local</label>
                <input
                    id="local"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="idtipo">Tipo</label>
                <input
                    id="idtipo"
                    value={idtipo}
                    onChange={(e) => setIdtipo(e.target.value)}
                />
                {erros.idtipo && <span>{erros.idtipo}</span>}
            </div>

            <div>
                <label htmlFor="idfornecedor">Fornecedor</label>
                <input
                    id="idfornecedor"
                    value={idfornecedor}
                    onChange={(e) => setIdfornecedor(e.target.value)}
                />
                {erros.idfornecedor && <span>{erros.idfornecedor}</span>}
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
}
