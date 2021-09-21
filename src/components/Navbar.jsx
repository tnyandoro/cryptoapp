import React from 'react';
import {
  Button, Menu, Typography, Avatar,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => (
  <div className="nav-container">
    <div className="logo-container">
      <Avatar src={icon} size="large" />
      <Typography.Title level={2} className="logo">
        <Link to="/"> Radical Crypto</Link>
      </Typography.Title>
    </div>

  </div>
);

export default Navbar;
