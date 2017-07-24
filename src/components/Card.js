import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';
import blink from '../images/blink.png';
import burst from '../images/burst.png';
import {
  Colors,
  revealAnimation,
  blinkAnimation,
  hideAnimation,
  burstAnimation,
} from '../styles';

const ContainerCardOutside = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  flex: 0 0 100px;
  height: 100px;
  margin: 6px;
`;

const Container = styled.span`
  display: flex;
  flex: 1;
  align-self: stretch;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isRevealed
      ? Colors.Card.revealedBackground
      : Colors.Card.notRevealedBackground};
`;

const Icon = styled.img`
  max-width: ${props => (props.halfRevealed ? `60%` : `80%`)};
  max-height: ${props => (props.halfRevealed ? `50%` : `70%`)};
  opacity: ${props => (props.halfRevealed ? `0.6` : `1`)};
  animation: ${revealAnimation} 2s;
`;

const Blink = styled.div`
  background-image: url(${blink});
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  animation: ${blinkAnimation} 1s steps(23);
`;

const Burst = styled.div`
  background-image: url(${burst});
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-size: cover;
  background-size: cover;
  animation: ${burstAnimation} 6s steps(40);
`;

const HideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  animation: ${hideAnimation} 0s ease-in 1s forwards;
  position: absolute;
`;

const AnimatedBlink = styled.div`
  display: flex;
  flex: 1;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-self: center;
  align-items: center;
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
