import { Button, Card, Table } from 'antd'
import React, { Component } from 'react'
import { getArticleList } from '../../services/Article'

export default class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        const articles = getArticleList(1, 10)
    }

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
            {
                title: '操作',
                dataIndex: 'address',
                key: 'address',
                render: (text, record, index) => {
                    console.log(text, record, index)
                    return <Button type='primary'>编辑</Button>
                }
            },
        ];
        return (
            <div>
                <Card title="文章列表" extra={<Button>导出</Button>}>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{
                            pageSize: 100,
                            total: 1000
                        }}
                    />
                </Card>
            </div>
        )
    }
}
