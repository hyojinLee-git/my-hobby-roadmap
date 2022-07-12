import { tilContent } from '@/recoil/til';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface IProps {
  moduleName: string;
  link: number;
  content: string;
}
function TilList({ moduleName, link, content }: IProps) {
  const setTilContent = useSetRecoilState(tilContent);
  return (
    <Link passHref href={`/til/${link}`}>
      <StyledLink onClick={() => setTilContent(content)}>
        {moduleName}
      </StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: #3e3e3e;
  background-color: #f2f5f6;
  border-bottom: 1px solid #aebbff;
  height: 80px;
  margin-bottom: 38px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
export default TilList;
