import React from 'react';

import AccountImg from '../../img/nuconta-inclined.png';
import { AccountIamge, Text, LinkTitle } from './styles';
import Link from '../Link';

function Account() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <LinkTitle href="#">Conta do Nubank</LinkTitle>
            <Text>
              Pode chamar ele de roxinho. Além disso, pode chamar ele de
              moderno, gratuito e prático também.
            </Text>
            <Link href="#" text="Saiba mais" inverted />
          </div>
          <div className="col-12">
            <AccountIamge src={AccountImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
