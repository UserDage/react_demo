import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { Layout, Divider } from 'antd';
import './App.css'
import Aside from './components/Aside';
import image from './image/鸟.png'
import MyInfo from './pages/MyInfo';
import Headers from './components/Header';
const { Content, Sider } = Layout
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
          <Headers></Headers>
          <Divider style={{ margin: '0 0 15px 0' }}></Divider>
          <Content className='Content'>
            <Routes>
              <Route path='/' element={<MyInfo />}></Route>
              <Route path='/MyInfo' element={<MyInfo />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;