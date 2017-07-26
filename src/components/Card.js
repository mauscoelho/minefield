import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import diamont from '../images/diamond.png';
import mine from '../images/mine.png';
import { Colors, revealAnimation, hideAnimation } from '../styles';
import BlinkAnimation from './BlinkAnimation';

const ResponsiveContainer = styled.span`
  background: tomato;
  margin: 5px;
  flex: 1 0 auto;
  height: auto;
  background-color: ${props =>
    props.isRevealed
      ? Colors.Card.revealedBackground
      : Colors.Card.notRevealedBackground};

  &::before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`;

const Icon = styled.span`
  width: ${props => (props.halfRevealed ? `60%` : `80%`)};
  height: ${props => (props.halfRevealed ? `50%` : `70%`)};
  opacity: ${props => (props.halfRevealed ? `0.6` : `1`)};
  animation: ${revealAnimation} 2s;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BlinkAutoHide = styled.div`
  height: 100%;
  width: 100%;
  float: left;
  position: absolute;
  z-index: 1;
  animation: ${hideAnimation} 0s ease-in 2s forwards;
`;

const Card = ({ isRevealed, isMine, halfRevealed, onClick }) =>
  <ResponsiveContainer isRevealed={isRevealed} onClick={onClick}>
    <Container>
      {isRevealed &&
        <Icon src={isMine ? mine : diamont} halfRevealed={halfRevealed} />}
      <BlinkAutoHide>
        <BlinkAnimation />
      </BlinkAutoHide>
    </Container>
  </ResponsiveContainer>;

Card.propTypes = {
  isRevealed: propTypes.bool.isRequired,
  isMine: propTypes.bool.isRequired,
  halfRevealed: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

Card.defaultProps = {
  isRevealed: false,
  isMine: false,
  halfRevealed: false,
};

export default Card;
