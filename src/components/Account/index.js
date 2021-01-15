import React from 'react';

import AccountImg from '../../img/nuconta-inclined.png';
import { AccountSection, AccountIamge, Text, LinkTitle, Div } from './styles';
import Link from '../Link';

function Account() {
  return (
    <>
      <AccountSection className="container">
        <div className="row">
          <Div className="col-10">
            <LinkTitle href="#">Conta do Nubank</LinkTitle>
            <Text>
              Nossa conta digital com mais de 20 milhões de clientes em todo o
              Brasil.
            </Text>
            <Link href="#" text="Segura e sem complicações " inverted up />
          </Div>
          <div className="col-12">
            <AccountIamge src={AccountImg} alt="" />
          </div>
        </div>
      </AccountSection>
    </>
  );
}

export default Account;
