import React, { useEffect } from 'react';
import BigCard from '../../components/BigCard';
import { useAppStore } from '../../stores/strapi'
// import { batchWebsite } from '../../services';
import  './index.less'


const MyComponent: React.FC = () => {
  const { categories, getWebsites, websites } = useAppStore();

  useEffect(() => {
    const pathId = window.location.pathname.split('/').pop();
    const docId = categories?.find((item) => item.dir === pathId)?.documentId;
    if (pathId === 'category' &&  window.location.pathname === '/category') {
      return
    }
    if (!docId) {
      return
    }

    getWebsites(docId).then((res) => {
      console.log('初始化请求 website', res);
    })
  }, []);

  const addClick = async () => {
    // await batchWebsite(db)
  }

  return (
    <div>
      {/* <button onClick={addClick}>添加</button> */}
      <div className="big-card-list-container">
        {websites?.map((item) => (
          <BigCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
