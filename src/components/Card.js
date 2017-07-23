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
  padding: 18px;     
  background-color: ${props =>
    props.isRevealed
      ? Colors.backgroundRevealed
      : Colors.backgroundNotRevealed};    
`;

const Icon = styled.img`
  max-width: ${props => (props.halfRevealed ? `80%` : `100%`)};
  max-height: ${props => (props.halfRevealed ? `70%` : `90%`)};
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

const Card = ({ card, onClick }) =>
  <ContainerCardOutside>
    <Container isRevealed={card.isRevealed} onClick={onClick}>
      {card.isRevealed &&
        <AnimatedBlink>
          <Icon
            src={card.isMine ? mine : diamont}
            halfRevealed={card.halfRevealed}
          />
          {!card.halfRevealed &&
            <HideContainer>
              {!card.isMine && <Blink />}
              {card.isMine && <Burst />}
            </HideContainer>}
        </AnimatedBlink>}
    </Container>
  </ContainerCardOutside>;

Card.propTypes = {
  card: propTypes.shape({
    isRevealed: propTypes.bool.isRequired,
    isMine: propTypes.bool.isRequired,
    halfRevealed: propTypes.bool.isRequired,
  }),
  onClick: propTypes.func.isRequired,
};

Card.defaultProps = {
  card: {
    isRevealed: false,
    isMine: false,
    halfRevealed: false,
  },
};

export default Card;
