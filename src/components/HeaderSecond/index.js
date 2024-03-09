import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Container } from './styles';

function HeaderSecond() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return <Container ref={ref}>{inView && <div className="black" />}</Container>;
}

export default HeaderSecond;
