import React, { Component } from 'react';
import { Divider, Avatar, Image, Input } from 'antd'
import axios from 'axios';
import './index.css'
class MyInfo extends Component {
    state = { userInfo: [] }
    componentDidMount() {
        axios.get('https://api.github.com/search/users?q=UserDage')
            .then(response => {
                this.setState({ userInfo: response.data.items })
                console.log(response.data.items);
            }).catch(err => {
                console.log(err.message);
            })
    }
    render() {
        return (
            <div className='MyInfo' style={{ width: '100%', height: '100%' }}>
                <span className='MyInfoHeader'><b>您的个人资料</b></span>
                <Divider style={{ marginTop: 0 }}></Divider>
                <div className='MyInfoMain'>
                    <div className='headPic'>
                        {
                            this.state.userInfo.map((data) => {
                                return (
                                    <Avatar key={data.id} style={{ width: '200px', height: '200px' }} src={<Image src={data.avatar_url} style={{ width: 250, marginTop: '-50PX' }} />} />
                                )
                            })
                        }
                    </div>
                    {
                        this.state.userInfo.map((data) => {
                            return (
                                <div className='userInfo' key={data.id}>
                                    <div className='info'>
                                        <table>
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <ul>
                                                    <li>
                                                        <b>信息</b>
                                                    </li>
                                                </ul>
                                                <tr>
                                                    <td><span>姓名：</span></td>
                                                    <td><Input style={{ width: 'auto' }} defaultValue={data.login}></Input></td>
                                                </tr>
                                                <tr>
                                                    <td><span>GitHub地址：</span></td>
                                                    <td><Input style={{ width: 'auto' }} defaultValue={data.html_url}></Input></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <ul style={{ marginTop: '5rem' }}>
                                                    <li>
                                                        <b>用户类型</b>
                                                    </li>
                                                </ul>
                                                <tr>
                                                    <td><span>是否为站点管理员：</span></td>
                                                    <td><Input style={{ width: 'auto' }} defaultValue={data.site_admin ? "是" : "否"}></Input></td>
                                                </tr>
                                                <tr>
                                                    <td> <span>用户类型：</span></td>
                                                    <td> <Input style={{ width: 'auto' }} defaultValue={data.type}></Input></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MyInfo;