import React from 'react';
import Api from './api/Api';
import UserPost from './enpoints/UserPost';

const App = () => {
  return (
    <div>
      <Api />
      <UserPost />
    </div>
  );
};

export default App;
