import React from 'react';
import styled from 'styled-components';

function Header({ title }: { title: string }) {
  return (
    <h1 style={{ borderBottom: '0.25px solid #00000080', width: '100%' }}>
      {title}
    </h1>
  );
}

export default Header;
