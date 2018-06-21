import React, {Component} from 'react';
import RouterDiv from './router/index';
import "./App.less";
import {LocaleProvider} from "antd"
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <RouterDiv></RouterDiv>
            </LocaleProvider>
        );
    }
}

export default App;
