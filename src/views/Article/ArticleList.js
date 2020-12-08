import { Button, Card, Table } from 'antd'
import React, { Component } from 'react'

export default class ArticleList extends Component {
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ];
        return (
            <div>
                <Card title="文章列表" extra={<Button>导出</Button>}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{
                            pageSize:100,
                            total:1000
                        }}
                    />
                </Card>
            </div>
        )
    }
}
