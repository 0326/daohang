import React, { useEffect } from 'react';
import Search from './Search';
import Sites from './Sites';
import './index.less'


const data = [
  {
    title: 'Google',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com',
    icon: 'https://www.twitter.com/favicon.ico',
  },
  {
    title: 'Google',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com',
    icon: 'https://www.twitter.com/favicon.ico',
  },
  {
    title: 'Google',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com',
    icon: 'https://www.twitter.com/favicon.ico',
  },
  {
    title: 'Google',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com',
    icon: 'https://www.twitter.com/favicon.ico',
  },
  {
    title: 'Google',
    url: 'https://www.google.com',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    title: 'TwitterTwitterTwitterTwitter',
    url: 'https://www.twitter.com',
    icon: 'https://www.twitter.com/favicon.ico',
  },
];

const MyComponent: React.FC = () => {
  useEffect(() => {
    const root = document.querySelector('.ant-pro-layout-bg-list')
    root!.style.backgroundImage = `url(https://www.bing.com/th?id=OHR.DanumValley_ROW7259991229_1920x1080.webp)`
    return () => {
      root!.style.backgroundImage = ''
    }
  }, []);
  return (
    <div className='page-home'>
      {/* <h1>Hello, World!</h1> */}
      <Search />
      <div className='sites-container'>
        <Sites data={data} />
      </div>
    </div>
  );
};

export default MyComponent;
