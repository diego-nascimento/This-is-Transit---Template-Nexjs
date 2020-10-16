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
              <img src={car.photo[0].url} alt={car.photo.description} />
              <h3>{car.name}</h3>
            </div>
            <Link href={'/cars/' + car.id} style={{ width: '100%' }}>
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
