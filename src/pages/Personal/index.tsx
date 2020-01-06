import React from 'react';
import { ClickUtils } from 'utils/index'

const Personal:React.FC = () => {
  const handleMultiClick = () => {
    ClickUtils.multiClick(() => {
      localStorage.setItem('active-eruda', 'true');
    })
  }
  return <div onClick={handleMultiClick}>Personal</div>
}

export default Personal;
 