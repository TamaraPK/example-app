import React from 'react';

import UserList from './components/UserList';
import { ButtonPF } from "@primekey-design-system/pkds";

const users = [
  {
    id: '1',
    name: 'Dominic Nyugen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
  {
    id: '1',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
  },
];

function App() {
  return <ButtonPF label={"Hello PF button"} />;
}

export default App;
