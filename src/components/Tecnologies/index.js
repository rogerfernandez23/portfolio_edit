/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Docker from '../../assets/docker_logo.png';
import JS from '../../assets/js_logo.png';
import MongoDb from '../../assets/mongodb_logo.png';
import Node from '../../assets/node_logo.png';
import Postgres from '../../assets/postgres_logo.png';
import ReactImg from '../../assets/react_logo.png';
import { Container } from './styles';

function Tecnologies() {
  return (
    <Container>
      <img
        className="js"
        src={JS}
        alt="java-script-image"
        title="Java-Script"
      />

      <img className="react" src={ReactImg} alt="react-image" title="React" />
      <img className="node" src={Node} alt="node-image" title="Node.js" />
      <img className="docker" src={Docker} alt="docker-image" title="Docker" />
      <img
        className="postgres"
        src={Postgres}
        alt="postgres-image"
        title="PostgeSQL"
      />
      <img
        className="mongodb"
        src={MongoDb}
        alt="mongo-image"
        title="MongoDB"
      />
    </Container>
  );
}

export default Tecnologies;
