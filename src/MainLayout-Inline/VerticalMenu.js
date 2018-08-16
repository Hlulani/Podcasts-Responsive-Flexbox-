import React from "react";
import "./VerticalMenu.css";
import "font-awesome/css/font-awesome.min.css";

class VerticalMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // shown: this.props.shown,
        };
    }

    render() {
        return (
       
            <div className="wrapper" style={{ display: "none"} }>
                <nav className= "nav">
                    <ul >
                        <li>About</li>
                        <li>Podcasts</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default VerticalMenu;
