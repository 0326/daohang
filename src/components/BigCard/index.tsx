import React from 'react';
import { Card, Flex } from 'antd';
import { HeartFilled } from '@ant-design/icons';


import './index.less';

const { Meta } = Card;

export type BigCardProps = {
  _id: string;
  name: string;
  cover: string;
  favorite?: boolean;
}

const BigCard: React.FC<BigCardProps> = ({ name, cover, favorite }) => (
  <Card
    hoverable
    className='big-card-comp'
    cover={
      <div className='big-card-cover'>
        <div className='big-card-mask'>
          <div className='big-card-mask-text'>查看详情</div>
        </div>
        <img alt="example" src={cover || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />
      </div>
    }
  >
    <Meta
      title={
        <Flex justify='space-between' align='center'>
          <div className='big-card-title'>{name}</div>
          <div className='big-card-favorite'>
            <HeartFilled style={{ color: favorite ? '#DA6CD4' : '#A6A6A6' }} />
            <span className='big-card-favorite-num'>21</span>
          </div>
        </Flex>
      }
      // description={
      //   <Flex gap="4px 0" wrap>
      //     <Tag color="magenta">magenta</Tag>
      //     <Tag color="red">red</Tag>
      //     <Tag color="volcano">volcano</Tag>
      //     <Tag color="orange">orange</Tag>
      //     <Tag color="gold">gold</Tag>
      //     <Tag color="lime">lime</Tag>
      //     <Tag color="green">green</Tag>
      //     <Tag color="cyan">cyan</Tag>
      //     <Tag color="blue">blue</Tag>
      //     <Tag color="geekblue">geekblue</Tag>
      //     <Tag color="purple">purple</Tag>
      //   </Flex>
      // }
    />
  </Card>
);

export default BigCard;
