import React, { Component } from 'react';
// import { Layout,Menu,Icon,Button } from 'antd';
import { button } from 'react';

class Link extends Component {

    handleClick() {
        console.log('链接被点击');
        alert('clicked link')
    }

    render() {
        return (
            <div>
                <a href={this.props.site}>
                    {this.props.site}
                </a>
                <button onClick={this.handleClick}> 点我试试</button>
            </div>
        );
    }
}

export default Link;
