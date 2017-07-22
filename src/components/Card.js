import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';
import blink from '../images/blink.png';
import burst from '../images/burst.png';
import {
  ContainerCard,
  ContainerCardOutside,
  Colors,
  revealAnimation,
  blinkAnimation,
  hideAnimation,
  burstAnimation,
} from '../styles';

const Container = styled(ContainerCard)`
  box-shadow: 0 0 2px 1px
    ${props =>
      props.isRevealed
        ? Colors.backgroundRevealed
        : Colors.backgroundNotRevealed};
  background-color: ${props =>
    props.isRevealed
      ? Colors.backgroundRevealed
      : Colors.backgroundNotRevealed};    
`;

const Icon = styled.img`
  max-width: ${props => (props.halfRevealed ? `50%` : `100%`)};
  max-height: ${props => (props.halfRevealed ? `40%` : `90%`)};
  opacity: ${props => (props.halfRevealed ? `0.6` : `1`)};
  animation: ${revealAnimation} 2s;
`;

const Blink = styled.div`
  background-image: url(${blink});
  width: 90%;
  height: 90%;
  background-size: cover;
  animation: ${blinkAnimation} 1s steps(8);
  position: absolute;
`;

const Burst = styled.div`
  background-image: url(${burst});
  width: 100%;
  height: 100%;
  background-size: cover;
  animation: ${burstAnimation} 1s steps(8);
  position: absolute;
`;

const HideContainer = styled.div`
  display: flex;
  flex: 1;
  width: 14em;
  height: 14em;
  animation: ${hideAnimation} 0s ease-in 1s forwards;
  position: absolute;
`;

const AnimatedBlink = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Card = ({ isRevealed, isMine, halfRevealed, isLoss }) =>
  <ContainerCardOutside>
    <Container isRevealed={isRevealed}>
      {isRevealed &&
        <AnimatedBlink>
          <Icon src={isMine ? mine : diamont} halfRevealed={halfRevealed} />
          {!halfRevealed &&
            <HideContainer>
              {!isMine && <Blink />}
              {isMine && <Burst />}
            </HideContainer>}
        </AnimatedBlink>}
    </Container>
  </ContainerCardOutside>;

Card.propTypes = {
  isRevealed: propTypes.bool.isRequired,
  isMine: propTypes.bool.isRequired,
  halfRevealed: propTypes.bool.isRequired,
  isLoss: propTypes.bool.isRequired,
};

Card.defaultProps = {
  isRevealed: false,
  isMine: false,
  halfRevealed: false,
  isLoss: false,
};

export default Card;
