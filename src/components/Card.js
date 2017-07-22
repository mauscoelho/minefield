import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';
import blink from '../images/blink.png';
import {
  ContainerCard,
  ContainerCardOutside,
  Colors,
  revealAnimation,
  blinkAnimation,
  hideAnimation,
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
  display: flex;
  flex: 1;
  background-image: url(${blink});
  width: 100px;
  height: 100px;
  background-size: cover;
  animation: ${blinkAnimation} 1s steps(8);
  position: absolute;
`;

const BlinkContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100px;
  height: 100px;
  background-size: cover;
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
        !isLoss &&
        <AnimatedBlink>
          <Icon src={isMine ? mine : diamont} halfRevealed={halfRevealed} />
          <BlinkContainer>
            <Blink />
          </BlinkContainer>
        </AnimatedBlink>}
      {isLoss &&
        <Icon src={isMine ? mine : diamont} halfRevealed={halfRevealed} />}
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
