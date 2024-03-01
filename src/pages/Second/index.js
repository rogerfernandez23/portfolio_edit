/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import HeaderSecond from '../../components/HeaderSecond';
import { Container, ContainerItens } from './styles';

function Second() {
  return (
    <Container id="resumo">
      <ContainerItens>
        <div className="yellow" />
        <div className="container-text">
          <h1>QUEM É ROGÉRIO?</h1>
          <p>
            Profissional apaixonado por tecnologia e desenvolvimento de
            software, com ampla experiência em criar soluções inovadoras e
            automatizadas. Ao longo da minha carreira, tenho desenvolvido e
            implementado projetos utilizando diversas tecnologias e aplicando
            sólidos princípios de lógica de programação. Minhas habilidades
            incluem: <br />
            <br />
            Linguagens e Frameworks: JavaScript, Node.js, React, Express.js.{' '}
            <br />
            Bancos de Dados: PostgreSQL (Sequelize) e MongoDB (Mongoose). <br />
            Metodologias e Práticas: Expertise em metodologias de
            desenvolvimento e aplicação de boas práticas. <br />
            <br />
            Estou constantemente atualizando minhas habilidades para atender às
            demandas do mercado, sempre em busca de proporcionar soluções
            eficazes para empresas e indivíduos. Já participei de projetos
            diversos, contribuindo para encontrar soluções inovadoras e
            eficientes. Comunicativo, comprometido e colaborativo, busco sempre
            trabalhar em equipe para alcançar os melhores resultados. <br />
            <br />
          </p>
        </div>
      </ContainerItens>
      <HeaderSecond />
    </Container>
  );
}

export default Second;
