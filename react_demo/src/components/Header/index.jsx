import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd'
import './index.css'
class Header extends Component {
    render() {
        return (
            <div className='Header' style={{ height: '100%' }}>
                <Divider style={{ margin: 0 }}></Divider>
            </div>
        );
    }
}

export default Header;