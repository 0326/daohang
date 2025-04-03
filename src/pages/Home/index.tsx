import React, { useEffect } from 'react';
import Search from './Search';
import Sites from './Sites';
import './index.less'
import { useAppStore } from '../../stores/strapi';

const MyComponent: React.FC = () => {
  const { getFavorites, favorites, user } = useAppStore()
  useEffect(() => {
    const root = document.querySelector('.ant-pro-layout-bg-list')
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    root!.style.backgroundImage = `url(https://www.bing.com/th?id=OHR.DanumValley_ROW7259991229_1920x1080.webp)`
    const init = async () => {
      await getFavorites()
    }
    init()

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      root!.style.backgroundImage = ''
    }
  }, []);
  return (
    <div className='page-home'>
      {/* <h1>Hello, World!</h1> */}
      <Search />
      <div className='sites-container'>
        <Sites data={favorites} showAdd={!!user?.documentId} />
      </div>
    </div>
  );
};

export default MyComponent;
