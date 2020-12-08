import Login from "../views/Login"
import NotFound from "../views/NotFound/NotFound"
//import Dashboard from "../views/Dashboard/Dashboard"
import Setting from "../views/Setting/Setting"
import ArticleList from "../views/Article/ArticleList"
import ArticleEdit from "../views/Article/ArticleEdit"

import Loading from '../components/Loading'
// import Loadable from 'react-loadable'
import Loadable from '../views/loadable'
import Notification from "../views/Notifications/Notification"

const Dashboard = Loadable({
    loader: () => import("../views/Dashboard/Dashboard"),
    loading: Loading
})

export const mainRoutes = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    }
]

export const adminRoutes = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard,
        nav: true,
        title: '仪表盘'
    },
    {
        pathname: '/admin/article',
        exact: true,
        component: ArticleList,
        nav: true,
        title: '文章'
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit
    },
    {
        pathname: '/admin/setting',
        component: Setting,
        nav: true,
        title: '设置'
    },
    {
        pathname: '/admin/notifications',
        component: Notification
    },
]