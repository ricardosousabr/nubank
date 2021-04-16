import React from 'react';

import Logo from '../../img/logo.png';
import { HeaderBox, LogoImage, Menu, LinkHeader, ButtonNav } from './styles';

function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <HeaderBox className="col-12">
              <a href="#">
                <LogoImage src={Logo} alt="Logo" />
              </a>
              <ButtonNav type="button">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 21 20"
                    className="SVGWrapper-c62y5b-0 ilbcfK"
                    color="currentColor"
                    role="img"
                  >
                    <title>Abrir Menu</title>
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#000000"
                        d="M0.5 7H20.5V5H0.5V7ZM0.5 15H20.5V13H0.5V15Z"
                      />
                    </g>
                  </svg>
                </span>
              </ButtonNav>
            </HeaderBox>
            <div className="col-12">
              <Menu>
                <li>
                  <LinkHeader href="#">Início</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Coanta digital</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Cartão de crédito</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Pix</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Empréstimo</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Conta PJ</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Rewards</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Seguros</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Sobres nós</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Carreiras</LinkHeader>
                </li>
                <li>
                  <LinkHeader href="#">Login</LinkHeader>
                </li>
              </Menu>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
