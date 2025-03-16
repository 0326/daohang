import React from 'react';
import { Avatar, Card, Flex, Typography, Tag } from 'antd';
import { StarTwoTone, ExportOutlined } from '@ant-design/icons';


import './index.less';

const { Meta } = Card;
const { Paragraph } = Typography;
const DEFAULT_COVER = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

function getThumb(url) {
  if (url?.indexOf('aliyuncs.com') > -1) {
    return url + '?x-oss-process=image/resize,l_600,m_lfit';
  }
  return url || DEFAULT_COVER;
}

export type BigCardProps = {
  id: string;
  name: string;
  cover: string;
  favicon?: string;
  description?: string;
  favorite?: boolean;
  url?: string;
}

const BigCard: React.FC<BigCardProps> = ({ name, url, cover, favicon, description, favorite }) => (
  <Card
    // hoverable
    className='big-card-comp'
    cover={
      <div className='big-card-cover'>
        {/* <div className='big-card-mask'>
          <div className='big-card-mask-text'>{description}</div>
        </div> */}
        <div className='big-card-favorite'>
          <StarTwoTone twoToneColor={favorite ? "#999" : "#eb2f96"} style={{ fontSize: 20 }} />
        </div>
        <Flex className='big-card-tags' gap="4px 0" wrap>
          <Tag color="magenta">magenta</Tag>
          <Tag color="purple">purple</Tag>
        </Flex>
        <div className='big-card-thumb' style={{ backgroundImage: `url(${getThumb(cover)})` }} />
      </div>
    }
  >
    <Meta
      title={
        <a href={url} target='_blank' rel='noreferrer'>
          <Flex justify='space-between' align='center'>
            <div className='big-card-title'><Avatar src={favicon} size="small" /><span>{name}</span></div>
            <ExportOutlined />
          </Flex>
        </a>
      }
      description={<Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 4 }}>{description}</Paragraph>}
    />
  </Card>
);

export default BigCard;
