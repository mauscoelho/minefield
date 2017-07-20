import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1``;

export default function() {
  return (
    <Container>
      <Text>Welcome to Minefield</Text>
    </Container>
  );
}
