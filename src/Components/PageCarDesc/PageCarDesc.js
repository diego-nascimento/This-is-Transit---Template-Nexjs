import React from 'react';
import { Item, Botao } from './PageCarDesc.styles';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import stripeconfig from '../../config/stripe';

const stripePromise = loadStripe(
  'pk_test_51HgKFoCwD93iY29dG7beVY84MPDc8axX6EjB0WMxgKu3rjsWKY0DYCcDT0LE9xwpqHlvQ4ww1VpvHGa3lSSAhlDi00FAtEyAQg',
);

export default function PageCarDesc({ data }) {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: data.price.id, // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
      shippingAddressCollection: {
        allowedCountries: ['BR'],
      },
    });
  };
  return (
    <Item>
      <Link href="/produtos">
        <Botao>Voltar</Botao>
      </Link>
      <h1>{data.name}</h1>
      <img src={data.images[0]} alt={data.name} />

      <p>
        <span style={{ color: 'black', fontWeight: 'bold' }}>Descrição: </span>
        {data.description}
      </p>
      <p style={{ fontSize: '25px' }}>
        <span style={{ color: 'black', fontWeight: 'bold' }}>Preço: </span>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(data.price.unit_amount / 100)}
      </p>
      <button onClick={handleClick}>Comprar</button>
    </Item>
  );
}
