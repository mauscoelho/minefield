import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';
import {
  ContainerCard,
  ContainerCardOutside,
  Colors,
  revealAnimation,
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
  animation: ${revealAnimation} 1s;
`;

const Card = ({ isRevealed, isMine, halfRevealed }) =>
  <ContainerCardOutside>
    <Container isRevealed={isRevealed}>
      {isRevealed &&
        <Icon src={isMine ? mine : diamont} halfRevealed={halfRevealed} />}
    </Container>
  </ContainerCardOutside>;

Card.propTypes = {
  isRevealed: propTypes.bool.isRequired,
  isMine: propTypes.bool.isRequired,
  halfRevealed: propTypes.bool.isRequired,
};

export default Card;
