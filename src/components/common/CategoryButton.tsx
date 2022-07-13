import React from 'react';
import styled from 'styled-components';

function CategoryButton({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) {
  return <Button selected={selected}>{name}</Button>;
}
const Button = styled.button`
  display: block;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? '#1970C6' : '#FFF'};
  height: 44px;
  border-radius: 20px;
  margin-right: 22px;
  border: 1px solid rgba(121, 116, 126, 0.5);
  font-size: 16px;
  padding: 12px 16px;
  color: ${(props: { selected: boolean }) =>
    props.selected ? 'white' : '#1C1B1F'};
`;
export default CategoryButton;
