import React from 'react';
import BigCard from '../../components/BigCard';

import  './index.less'

const data = (new Array(10)).fill(0).map((_, i) => ({
  title: `Title ${i}`,
  cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  favorite: i % 2 === 0,
}));

const MyComponent: React.FC = () => {
  return (
    <div>
      <div className="big-card-list-container">
        {data.map((item, i) => (
          <BigCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
