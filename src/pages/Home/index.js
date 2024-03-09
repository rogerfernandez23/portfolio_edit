/* eslint-disable func-names */
import React from 'react';

import Footer from '../../components/Footer';
import Main from '../Main';
import Second from '../Second';
import Third from '../Third';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Main />
      <Second />
      <Third />
      <Footer />
    </Container>
  );
}

export default Home;
