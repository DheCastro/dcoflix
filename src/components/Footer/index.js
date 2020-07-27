import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" rel="noopener noreferrer" target="_blank">
          Imersão React da Alura
        </a>
      </p>
      <p>
        E empolgantemente estudado por
        {' '}
        <a href="http://www.dhecastro.com.br/" rel="noopener noreferrer" target="_blank">
          Dhellano de Castro Oliveira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
