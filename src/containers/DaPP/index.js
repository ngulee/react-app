import React from 'react';
import './index.scss';

import Card from '../BaseComponents/Card';
import RoundRect from '../BaseComponents/RoundRect';
import TargetTrace from '../BaseComponents/TargetTrace';
import MiShopFlow from '../BaseComponents/MiShopFlow';

export default () => {
  return (
    <div className='dapp'>
      <Card>
        <RoundRect />
        <div style={{height: 200}}>
          sdsdsd
        </div>
      </Card>
      <Card>
        <div style={{height: 200}}>
          sdsdsd222
        </div>
      </Card>
      <TargetTrace />
      <MiShopFlow />
    </div>
  )
}