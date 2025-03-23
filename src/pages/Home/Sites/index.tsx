import React from 'react';
import { List, Avatar, Typography } from 'antd';
import './index.less'


interface SitesProps {
  data: { url: string; icon: string; title: string }[];
}

const Sites: React.FC<SitesProps> = ({ data }) => {
  return (
    <List
      grid={{ gutter: 8, column: 10, sm: 5, md: 6, lg: 8, xl: 10 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <div className="site-list-item" onClick={() =>
            window.open(item.url, '_blank')
          }>
            <div className="site-avatar">
              <Avatar src={item.icon} size={48} />
            </div>
            <div className="site-title">
              <Typography.Text title={item.title} ellipsis>{item.title}</Typography.Text>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default Sites;