/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import JS from '../../../assets/js_logo.png';
import LinkI from '../../../assets/link_logo.png';
import Base from '../../../assets/model_api.jpg';
import Node from '../../../assets/node_logo.png';
import ReactImg from '../../../assets/react_logo.png';
import Git from '../../../assets/rep_logo.png';
import { Container, ContainerItens } from './styles';

function ProjectApi({ onClose }) {
  const linkProj = 'https://burguerlist.netlify.app/';
  const linkRep = 'https://github.com/rogerfernandez23/api-burguer-node';

  return (
    <Container>
      <ContainerItens>
        <div className="container">
          <div className="image">
            <img src={Base} className="background" />
          </div>
          <div className="contents">
            <h1>API DE PEDIDOS</h1>
            <div className="contents-header">
              <p>Tecnologias:</p>
              <p className="status -api">FINALIZADO</p>
            </div>
            <div className="tec-image">
              <img src={JS} className="px" title="Java-Script" />
              <img src={ReactImg} className="px" title="React" />
              <img src={Node} className="px" title="Node.js" />
            </div>

            <div className="links">
              <nav>
                <img src={LinkI} className="link-image" />
                <a href={linkProj} target="blank">
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
          <p className="description -b">
            <br />
            Nesta aplicação, o usuário pode controlar os pedidos em fila de uma
            lanchonete, com identificação e, em uma segunda tela, confirmar o
            status do pedido como finalizado ou apagá-lo.
            <br />
            <br />
            No backend, foram utilizados métodos de criação, edição (ao alterar
            o status do pedido) e deleção com rotas <b>GET</b>, <b>PUT</b>,{' '}
            <b>POST</b>, <b>PATCH</b> e<b>DELETE</b>. Além disso, foi adicionado
            um middleware que mostra cada método requisitado pelo usuário em
            tempo real, juntamente com o ID do pedido clicado. <br />
            <br />
            Na conexão com o frontend, as consultas são feitas via axios para
            trazer todos os pedidos cadastrados e exibir na tela, além de evitar
            que os usuários cadastrem pedidos com campos vazios. <br />
            <br />
            Um projeto simples, porém muito eficaz na prática de utilização de
            lógica para uma aplicação que não ofereça erros desnecessários e
            seja de fácil uso.
          </p>
        </div>
      </ContainerItens>
    </Container>
  );
}

export default ProjectApi;

ProjectApi.propTypes = {
  onClose: PropTypes.func.isRequired
};
