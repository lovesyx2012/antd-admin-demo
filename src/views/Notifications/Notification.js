import { Button, Card } from 'antd';
import React, { Component } from 'react';

class Notification extends Component {
    render() {
        return (
            <Card title='通知' extra={<Button>全部标记为已读</Button>}>

            </Card>
        );
    }
}

export default Notification; 