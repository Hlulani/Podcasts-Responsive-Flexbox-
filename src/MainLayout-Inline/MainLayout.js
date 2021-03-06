import React from "react";
import "./MainLayout.css";
import "font-awesome/css/font-awesome.min.css";
import VerticalMenu from "./VerticalMenu";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true,
    };
  }

 showAndHideMenu(){
   this.setState({
     shown: !this.state.shown
   });
 }

  render() {
    return <div className="wrapper">
        <nav className="nav">
          <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Podcasts</li>
            <li>Contact</li>
            <li className="icon">
              <i className="fa fa-bars" />
            </li>
          </ul>
        </nav>

        <div id="main">
          <h1> 1. Podcasts 101!</h1>
          <p>
            This example shows a menu that will float to the left of the
            page if the viewport is 480 pixels wide or wider. If the
            viewport is less than 480 pixels, the menu will be on top of the
            content.
          </p>
        </div>

        <div id="content">
          <div className="full-screen">
            <h1>2. Podcasts only for desktop users!</h1>
            <p>
              This example shows a menu that will float to the left of the
              page if the viewport is 480 pixels wide or wider. If the
              viewport is less than 480 pixels, the menu will be on top of
              the content.
            </p>
          </div>
        </div>

        <VerticalMenu shown={this.props.shown}></VerticalMenu>
      </div>
  }
}
export default MainLayout;
