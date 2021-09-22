import React from 'react';
import millify from 'millify';
import {
  Typography, Row, Col, Statistic,
} from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoQuery } from '../services/cryptoApi';

const { Title } = Typography;
const Homepage = () => (
  <>
    <Title level={2} className="heading">
      Global Crypto Stats
    </Title>
    <Row>
      <Col span={12}>
        {' '}
        <Statistic title="Total Cryptocurrencies" value="5" />
        <Statistic title="Total Exchange" value="5" />
        <Statistic title="Total Market Cap" value="5" />
        <Statistic title="Total 24h volume" value="5" />
        <Statistic title="Total Markets" value="5" />
      </Col>
    </Row>
  </>
);

export default Homepage;
