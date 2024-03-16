/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import Figma from '../../../assets/figma_logo.png';
import CoverMarket from '../../../assets/marketplace.jpg';
import { Container, ContainerItens } from './styles';

function ProjectMarket({ onClose }) {
  const linkFig =
    'https://www.figma.com/file/sUuaMUm37ASWKBTYlvfL3A/Federa%C3%A7%C3%A3o-ACPBM---Marketplace?type=design&t=fOijp0i7XRsgaRT1-6';
  return (
    <Container>
      <ContainerItens>
        <div className="container">
          <div className="image">
            <img src={CoverMarket} className="background" />
          </div>
          <div className="contents">
            <h1 className="market-h1">FEDERAÇÃO ACPBM - MARKETPLACE</h1>
            <div className="contents-header">
              <p className="status status-market">EM BREVE</p>
            </div>
            <div className="links">
              <nav>
                <img src={Figma} className="figma-image" />
                <a href={linkFig} target="blank">
                  Projeto no Figma
                </a>
              </nav>
            </div>
          </div>
        </div>
        <button onClick={onClose}>x</button>

        <div className="text">
          <h2>DESCRIÇÃO</h2>
          <p className="description -a">
            <br />
            Aliado ao site da Federação ACPBM, teremos o marketplace. Este
            projeto tem como finalidade a exploração na utilização de novas
            tecnologias, onde irei aprofundar meus conhecimentos em uma
            aplicação que exigirá funcionalidades e metodologias de
            desenvolvimento, tais como:
            <br />
            <br />• <b>Pesquisa e Filtros:</b> Implementação de recursos que
            permitam aos usuários buscar produtos ou serviços específicos e
            aplicar filtros para refinar os resultados de acordo com suas
            preferências.
            <br />• <b>Carrinho de Compras e Checkout:</b> Desenvolvimento de
            funcionalidades que possibilitem aos usuários adicionar itens ao
            carrinho, revisá-lo e finalizar a compra de forma segura e
            eficiente.
            <br />• <b>Sistemas e APIs de Pagamentos:</b> Integração com métodos
            de pagamento, como cartões de crédito, débito, carteiras digitais,
            entre outros, através de APIs de terceiros, garantindo uma
            experiência de compra fluida e segura.
            <br />• <b>Atendimento ao Cliente:</b> Implementação de recursos
            para fornecer suporte aos usuários, como chat ao vivo, FAQs
            (Perguntas Frequentes), visando garantir uma comunicação eficaz e
            resolver possíveis dúvidas ou problemas dos clientes.
            <br />• <b>Notificações em Tempo Real:</b> Desenvolvimento de um
            sistema de notificações que mantenha os usuários informados sobre
            atividades relevantes, como atualizações de pedido, promoções
            especiais, utilizando tecnologias que oferecem comunicação em tempo
            real, como WebSockets (Socket.IO). <br />
            <br />
            <b>
              Este projeto ainda está em fase de arquitetura e design, e em
              breve trarei atualizações sobre o seu desenvolvimento e
              implementação.
            </b>
          </p>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default ProjectMarket;

ProjectMarket.propTypes = {
  onClose: PropTypes.func.isRequired
};
