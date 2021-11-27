import React, { Component } from 'react';
import { Layout, Avatar, Image } from 'antd'
import axios from 'axios'
import './index.css'
const { Header } = Layout
class Headers extends Component {
    state = { users: [] }
    componentDidMount() {
        axios.get('https://api.github.com/search/users?q=UserDage')
            .then(response => {
                this.setState({ users: response.data.items })
            }).catch(err => {
                console.log(err.message);
            })
    }
    render() {
        return (
            <Header className='Header'>
                {
                    this.state.users.map((data) => {
                        return (<div key={data.id} >
                            <span style={{ display: 'inline-block', marginRight: '20px' }}><b>欢迎您回来!账户号码：</b>{data.login}</span>
                            <Avatar style={{ backgroundColor: 'white' }} src={<Image src={data.avatar_url} style={{ width: 32 }} />} />
                        </div>)
                    })
                }
            </Header>
        );
    }
}

export default Headers;