import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { 
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News
} from './components';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <main className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route element={<Homepage />} path='/' />
              <Route element={<Exchanges />} path='/exchanges' />
              <Route element={<Cryptocurrencies />} path='/cryptocurrencies' />
              <Route element={<CryptoDetails />} path='/crypto/:coinId' />
              <Route element={<News />} path='/news' />
            </Routes>
          </div>
        </Layout>

        <footer className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: "center"}}>
            <div>Cryptoverse</div>
            All rights reserverd 
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>        
      </main>
    </div>
  )
}

export default App;
