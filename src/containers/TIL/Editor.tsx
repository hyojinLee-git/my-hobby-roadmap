import React, { useState } from 'react';
import styled from 'styled-components';

function Editor() {
  const [title, setTitle] = useState('');
  const _onChange = (v: string) => {
    setTitle(v);
  };

  return (
    <Container>
      <TitleInput
        onChange={(e) => _onChange(e.target.value)}
        value={title}
        placeholder="제목"
      />
      <div>contents</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 580px;
  border: 0.25px solid #000000;
  padding: 30px;
`;

const TitleInput = styled.input`
  width: 100%;
  background-color: #c4c4c41c;
  border: none;
  height: 56px;
  outline: none;
  padding: 16px;
  border-radius: 4px;
`;
export default Editor;
