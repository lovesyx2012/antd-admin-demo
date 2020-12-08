import { Card, Col, Row } from 'antd'
import React, { Component } from 'react'
import './Dashboard.less'

export default class Dashboard extends Component {
    render() {
        
        return (
            <Card title='概览'>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className='dashboard-gutter-row' style={{background: '#00FFFF'}}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='dashboard-gutter-row' style={{background: '#0092ff'}}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='dashboard-gutter-row' style={{background: '#00FF00'}}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='dashboard-gutter-row' style={{background: '#C0C0C0'}}>col-6</div>
                    </Col>
                </Row>
            </Card>
        )
    }
}
