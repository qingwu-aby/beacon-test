import React from 'react';
import style from './app.module.scss';
import BaseLayout from 'layouts/BaseLayout';

const App: React.FC = () => <div className={style.app}>
  <BaseLayout />
</div>

export default App;
