import React, { useEffect } from 'react';
import BigCard from '../../components/BigCard';
import { useAppStore } from '../../stores'
import  './index.less'


const MyComponent: React.FC = () => {
  const { website, getWebsite } = useAppStore();

  useEffect(() => {
    const pathId = window.location.pathname.split('/').pop();
    const id = pathId === 'category' ? '' : pathId;
    getWebsite(id).then((res) => {
      console.log('初始化请求 website', res);
    })
  }, []);

  return (
    <div>
      <div className="big-card-list-container">
        {website?.map((item) => (
          <BigCard {...item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
