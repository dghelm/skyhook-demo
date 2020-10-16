import React from 'react';
import Uploader from './components/Uploader';

import { Row, Col } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Row>
        <Col span={24}>
          <h1>Skynet Uploader</h1>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Uploader />
        </Col>
      </Row>
    </div>
  );
}

export default App;
