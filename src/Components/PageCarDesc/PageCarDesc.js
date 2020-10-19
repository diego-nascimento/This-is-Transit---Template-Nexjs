import React from 'react';
import { Item, Botao } from './PageCarDesc.styles';
import Link from 'next/link';

export default function PageCarDesc({ data }) {
  return (
    <Item>
      <Link href="/elements">
        <Botao>Voltar</Botao>
      </Link>
      <h1>{data.name}</h1>
      <img src={data.photo[0].url} alt={data.photo[0].description} />

      <p>
        <span style={{ color: 'black', fontWeight: 'bold' }}>Descrição: </span>
        {data.description}
      </p>
    </Item>
  );
}
