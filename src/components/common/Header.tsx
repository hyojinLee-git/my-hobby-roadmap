import React from 'react';
import styled from 'styled-components';

function Header({ title }: { title: string }) {
  return (
    <Container>
      <h1
        style={{
          borderBottom: '0.25px solid #00000080',
          paddingBottom: '15px',
        }}
      >
        {title}
      </h1>
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid red; */
  /* width: 98%; */
`;

export default Header;
