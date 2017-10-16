import React, {Component} from 'react';
import NavLink from "react-router-dom/es/NavLink";
import './index.less'
export default class BNavBar extends Component {
    render() {
        return (
            <div className="b_navbar">
                <NavLink exact to='/'>首页</NavLink>
                <NavLink to='/topic'>专题</NavLink>
                <NavLink to='/category'>分类</NavLink>
                <NavLink to='/cart'>购物</NavLink>
                <NavLink to='/user'>个人</NavLink>
            </div>
        )
    }
}