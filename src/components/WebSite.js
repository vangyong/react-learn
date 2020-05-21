import React, { Component } from 'react';
import Name from "./Name";
import Link from "./Link";

class WebSite extends Component {
    constructor() {
        super();

        this.state = {
            name: "website name 网站名",
            site: "https://www.runoob.com"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
}

export default WebSite;
