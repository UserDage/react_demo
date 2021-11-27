import React, { Component } from 'react';
import { Menu } from 'antd'
import { IdcardFilled, InfoCircleFilled, PayCircleFilled, FundFilled, PlusCircleFilled, EditFilled } from '@ant-design/icons';
import './index.css'
import MyNavLink from '../MyNavLink';

class Aside extends Component {
    render() {
        const iconStyle = {
            fontSize: '18px', color: 'rgb(165,110,217)'
        }
        return (
            <Menu className='Menu' mode="inline">
                <Menu.Item key={1} icon={<IdcardFilled style={{ ...iconStyle }} />}><MyNavLink to='/myInfo'>我的信息</MyNavLink></Menu.Item>
                <Menu.Item key={2} icon={<InfoCircleFilled style={{ ...iconStyle }} />}><MyNavLink to='/about'>关于我们</MyNavLink></Menu.Item>
                <Menu.Item key={3} icon={<EditFilled style={{ ...iconStyle }} />}><MyNavLink to='/change'>更改套餐</MyNavLink></Menu.Item>
                <Menu.Item key={4} icon={<PlusCircleFilled style={{ ...iconStyle }} />}><MyNavLink to='/plus'>额外服务</MyNavLink></Menu.Item>
                <Menu.Item key={5} icon={<FundFilled style={{ ...iconStyle }} />}><MyNavLink to='/stac'>流量统计</MyNavLink></Menu.Item>
                <Menu.Item key={6} icon={<PayCircleFilled style={{ ...iconStyle }} />}><MyNavLink to='/pay'>付款</MyNavLink></Menu.Item>
            </Menu>
        );
    }
}

export default Aside;