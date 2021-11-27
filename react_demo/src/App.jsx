import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { Layout, Divider } from 'antd';
import './App.css'
import Aside from './components/Aside';
import image from './image/鸟.png'
import MyInfo from './pages/MyInfo';

const { Header, Content, Sider } = Layout
//const { SubMenu } = Menu
class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider className='Sider'>
          <div className='image' style={{ backgroundImage: `url('${image}')` }}>
          </div>
          <Aside></Aside>
        </Sider>
        <Layout>
          <Header className='Header'>Header</Header>
          <Divider style={{ margin: '0 0 15px 0' }}></Divider>
          <Content className='Content'>
            <Routes>
              <Route path='/MyInfo' element={<MyInfo />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;