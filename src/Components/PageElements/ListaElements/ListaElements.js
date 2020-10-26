import React from 'react';
import { Lista, Item } from './ListaElements.style';
import Button from '../../Blue-Button/BlueButton';
import Link from 'next/link';

export default function ListaElements({ cars }) {
  return (
    <Lista>
      {cars.map((car) => {
        return (
          <Item key={car.id}>
            <div>
              <img src={car.images[0]} alt={car.name} />
              <h3>{car.name}</h3>
              <h3>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(car.price.unit_amount / 100)}
              </h3>
            </div>
            <Link href={'/cars/' + car.price.id} style={{ width: '100%' }}>
              <a style={{ width: '100%' }}>
                <Button fontSize="1rem" Width="90%" backgroundColor="#222">
                  Ver mais
                </Button>
              </a>
            </Link>
          </Item>
        );
      })}
    </Lista>
  );
}
