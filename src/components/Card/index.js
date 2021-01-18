import React from 'react';

import Link from '../Link';
import { LinkTitle, Text, Div, DivImage } from './styles';
import CardImage from '../../img/card-vertical.png';

function Card() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Div className="col-10">
            <LinkTitle href="#">Cartão de Crédito</LinkTitle>
            <Text>
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
            </Text>
            <Link text="Saiba mais" inverted href="#" />
          </Div>
          <DivImage className="col-12">
            <img src={CardImage} alt="" />
          </DivImage>
        </div>
      </div>
    </>
  );
}

export default Card;
