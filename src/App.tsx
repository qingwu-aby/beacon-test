import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { menuList } from 'components/menu'

const App: React.FC = () => {
  return (
    <Switch>
      {
        menuList.map((item, index) => {
          return item.comp
        })
      }
    </Switch>
  );
}

export default App;
