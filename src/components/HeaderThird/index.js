import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Container } from './styles';

function HeaderThird() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <Container ref={ref}>{inView && <div className="yellow" />}</Container>
  );
}

export default HeaderThird;
