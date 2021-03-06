// src/components/UserItem.js
 
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@tamarapk/learnstorybook-design-system';
 
const Container = styled.div`
  background: #eee;
  margin-bottom: 2em;
  padding: 0.5em;
`;
 
/*
const Avatar = styled.img`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  margin-right: 0.5em;
`;
*/
 
const Name = styled.span`
  color: #333;
  font-size: 16px;
`;
 
/*
export default ({ user: { name, avatarUrl } }) => (
  <Container>
    <Avatar src={avatarUrl} />
    <Name>{name}</Name>
  </Container>
);
*/
export default ({ user: { name, avatarUrl } }) => (
  <Container>
    <Avatar username={name} src={avatarUrl} />
    <Name>{name}</Name>
  </Container>
);