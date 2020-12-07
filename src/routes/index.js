import Login from "../views/Login"
import NotFound from "../views/NotFound/NotFound"
import Dashboard from "../views/Dashboard/Dashboard"
import Setting from "../views/Setting/Setting"
import ArticleList from "../views/Article/ArticleList"
import ArticleEdit from "../views/Article/ArticleEdit"

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
        component: Dashboard
    },
    {
        pathname: '/admin/setting',
        component: Setting
    },
    {
        pathname: '/admin/article',
        exact: true,
        component: ArticleList
    },
    {
        pathname: '/admin/article/edit/:id',
        component: ArticleEdit
    }
]