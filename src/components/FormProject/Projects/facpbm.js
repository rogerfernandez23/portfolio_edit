/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import Docker from '../../../assets/docker_logo.png';
import Figma from '../../../assets/figma_logo.png';
import JS from '../../../assets/js_logo.png';
import LinkI from '../../../assets/link_logo.png';
import Base from '../../../assets/model.jpg';
import Node from '../../../assets/node_logo.png';
import Postgres from '../../../assets/postgres_logo.png';
import ReactImg from '../../../assets/react_logo.png';
import Git from '../../../assets/rep_logo.png';
import { Container, ContainerItens } from './styles';

function ProjectOne({ onClose }) {
  const linkFig =
    'https://www.figma.com/file/YrYgEubnF3BEStZMIbvC35/Federa%C3%A7%C3%A3o-ACPBM-Site?type=design&t=GiyXXlMVI6N3SUr9-6';
  const linkRep = 'https://github.com/rogerfernandez23/acpbm-site';
  const deploy = 'https://facpbm.netlify.app/';

  return (
    <Container>
      <ContainerItens>
        <div className="container">
          <div className="image">
            <img src={Base} className="background" />
          </div>
          <div className="contents">
            <h1>FEDERAÇÃO ACPBM - SITE</h1>
            <div className="contents-header">
              <p>Tecnologias:</p>
              <p className="status">EM DESENVOLVIMENTO</p>
            </div>
            <div className="tec-image">
              <img src={ReactImg} className="px" title="React" />
              <img src={JS} className="px" title="Java-Script" />
              <img src={Node} className="px" title="Node.js" />
              <img src={Postgres} className="px" title="PostgeSQL" />
              <img src={Docker} className="px" title="Docker" />
            </div>

            <div className="links">
              <nav>
                <img src={Figma} className="figma-image" />
                <a href={linkFig} target="blank">
                  Projeto no Figma
                </a>
              </nav>

              <nav>
                <img src={LinkI} className="link-image" />
                <a href={deploy} target="blank">
                  Deploy do projeto
                </a>
              </nav>

              <nav>
                <img src={Git} className="git-image" />
                <a href={linkRep} target="blank">
                  Repositório Git
                </a>
              </nav>
            </div>
          </div>
        </div>
        <button onClick={onClose}>x</button>

        <div className="text">
          <h2>DESCRIÇÃO</h2>
          <p className="description">
            A <b>Federação ACPBM</b> surgiu da iniciativa de um grupo de amigos
            para gerenciar e organizar campeonatos a partir da plataforma
            popular de fantasy game: Cartola FC. Com o aumento do número de
            membros, equipes e campeonatos com o passar dos anos, tornou-se
            necessário o desejo de simplificar a gestão, já fragmentada em
            várias ferramentas diferentes. <br />
            <br />
            Com isso em mente, desenvolvi esta aplicação com o objetivo de
            resolver os desafios do gerenciamento dessas equipes e campeonatos
            de maneira prática. Inicialmente, ela utiliza apenas a imagem da
            ACPBM, mas há planos de expansão para transformá-la em um site com
            <b> múltiplos usuários</b> e <b>organizadores distintos</b>. <br />
            <br />
            Para garantir um gerenciamento eficiente, cada usuário pode criar
            seu próprio login e senha <b>exclusivos</b>. Após a aprovação, terão
            acesso ao seu próprio perfil, com a capacidade de sempre fazer
            alterações conforme necessário. Para os administradores, há acesso
            privilegiado para cadastrar equipes aos novos usuários, além de
            <b> criar</b>, <b>editar</b> e <b>excluir</b> equipes de maneira
            simples, rápida e prática. Para os visitantes regulares, o site
            oferece acesso a notícias e informações relevantes sobre a federação
            e futuramente, sobre o mundo do futebol. <br />
            <br />E olhando para o futuro, está prevista a implementação de
            recursos adicionais, como a visualização de tabelas, jogos e
            detalhes específicos de equipes e campeonatos. Para todo o
            detalhamento minucioso sobre as tecnologias e funcionalidades ativas
            e futuras, convido você a acessar e ler o <b>README</b> deste
            projeto no{' '}
            <a href={linkRep} target="blank">
              GitHub
            </a>
            .
          </p>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default ProjectOne;

ProjectOne.propTypes = {
  onClose: PropTypes.func.isRequired
};
