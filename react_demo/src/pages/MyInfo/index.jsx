import React, { Component } from 'react';
import { Divider } from 'antd'
import './index.css'
class MyInfo extends Component {
    state = { userInfo: [] }
    componentDidMount() {

    }
    render() {
        return (
            <div className='MyInfo' style={{ width: '100%', height: '100%' }}>
                <span className='MyInfoHeader'>您的个人资料</span>
                <Divider style={{ marginTop: 0 }}></Divider>
                <div className='MyInfoMain'>

                </div>
            </div>
        );
    }
}

export default MyInfo;