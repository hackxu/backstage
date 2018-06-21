import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Route, Redirect, Switch} from 'react-router-dom';
import store from "../store/index"

import loginPage from "../pages/login";
import HomePage from '../pages/HomeLayout'

var browserHistory = createHistory();


class Routerdiv extends Component {

    render() {
        // const { children } = this.props
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/login" component={loginPage}></Route>
                    <Route exact path="/" component={() => <Redirect to="/h/"/>}></Route>
                    <Route path="/h" component={HomePageRouter}></Route>
                    <PrivateRoute component={NoMatch}></PrivateRoute>
                </Switch>
            </Router>
        )
    }
}

const HomePageRouter = ({match, history}) => (
    <HomePage key="homepage" history={history}>
        <Switch>

            {/*<PrivateRoute exact path={match.url} component={HomePage}></PrivateRoute>*/}
            {/*{store.RouterList.map((item, index) => <PrivateRoute path={item.routepath} component={item.component}></PrivateRoute>)}*/}

            {/*<PrivateRoute path={`${match.url}/BannerManage`} component={BannerManagePage}></PrivateRoute>*/}
            {/*<PrivateRoute path={`${match.url}/HomeManage`} component={HomeManagePage}></PrivateRoute>*/}
            {/*<PrivateRoute path={`${match.url}/InfoManage`} component={InfoManagePage}></PrivateRoute>*/}
            <PrivateRoute component={NoMatch}></PrivateRoute>
        </Switch>
    </HomePage>

)

// const RouteWithSubRoutes = (route) => (
//     <PrivateRoute path={route.path} component={route.component}/>
// )
const NoMatch = ({location}) => (
    <div>
        <h3>404</h3>
    </div>
)
const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={props => {
        // console.log("!")
        return store.isLogin ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login'
            }}/>
        )
    }}/>
)
export default Routerdiv
