import React, { useState } from 'react';
import styled from 'styled-components';

function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const _onChangeTitle = (v: string) => {
    setTitle(v);
  };

  const _onChangeContent = (v: string) => {
    setContent(v);
  };

  return (
    <Container>
      <TitleInput
        onChange={(e) => _onChangeTitle(e.target.value)}
        value={title}
        placeholder="제목"
      />
      <ContentInput
        placeholder="본문내용"
        value={content}
        onChange={(e) => _onChangeContent(e.target.value)}
      />
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

const ContentInput = styled.textarea`
  width: 100%;
  background: #f3f2ef;
  border-radius: 4px 4px 0px 0px;
  border: none;
  outline: none;
  margin-top: 32px;
  height: 400px;
  padding: 42px 16px;
`;
export default Editor;
