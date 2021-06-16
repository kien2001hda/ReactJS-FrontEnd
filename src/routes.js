import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './pages/website/home'
import ProductPage from './pages/website/products'
import AboutPage from './pages/website/about'
import NotFoundPage from './pages/website/404'
import LayoutAdmin from './layouts/admin'
import LayoutWebsite from './layouts/website'
import DashBoard from './pages/admin/dashboard'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import ListProduct from './pages/admin/listproduct'
import ListCategory from './pages/admin/listcategory'
import ProductAdd from './pages/admin/productadd'
import DetailProducts from './pages/website/detailproduct'
import ProductEdit from './pages/admin/productedit'
import CategoryAdd from './pages/admin/categoryadd'
import CategoryEdit from './pages/admin/categoryedit'
import CategoryPage from './pages/website/categoryPage'
import AdminRoute from './user/AdminRoute'
import PrivateRoute from './user/PrivateRoute'


const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="/admin">
                                <Redirect to="/admin/dashboard" />
                            </Route>
                            {/* <PrivateRoute>
                                <Route exact path="/admin/dashboard">
                                    <DashBoard {...props} />
                                </Route>
                            </PrivateRoute> */}
                            <AdminRoute>
                                <Route exact path="/admin/dashboard">
                                    <DashBoard {...props} />
                                </Route>
                                <Route exact path="/admin/listproduct">
                                    <ListProduct {...props} />
                                </Route>
                                <Route exact path="/admin/listcategory">
                                    <ListCategory {...props} />
                                </Route>
                                <Route exact path="/admin/productadd">
                                    <ProductAdd {...props} />
                                </Route>
                                <Route exact path="/admin/productedit/:id">
                                    <ProductEdit {...props} />
                                </Route>
                                <Route exact path="/admin/categoryedit/:id">
                                    <CategoryEdit {...props} />
                                </Route>
                                <Route exact path="/admin/categoryadd">
                                    <CategoryAdd {...props} />
                                </Route>
                                <Route exact path="/admin/product">
                                    Product Manage
                                </Route>
                            </AdminRoute>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutWebsite>
                        <Switch>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route exact path="/product">
                                <ProductPage {...props} />
                            </Route>
                            <Route exact path="/product/:id">
                                <DetailProducts {...props} />
                            </Route>
                            <Route exact path="/category/:id">
                                <CategoryPage {...props} />
                            </Route>
                            <Route exact path="/signin">
                                <SignIn />
                            </Route>
                            <Route exact path="/signup">
                                <SignUp />
                            </Route>
                            <Route exact path="*">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </LayoutWebsite>
                </Route>
            </Switch>

        </Router>
    )
}

export default Routes
