import React from "react";
import "./VerticalMenu.css";
import "font-awesome/css/font-awesome.min.css";

class VerticalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: this.props.shown
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.shown !== this.state.shown) {
      this.setState({ shown: nextProps.shown });
      return true;
    }
    return false;
  }

  render() {
    let display = "none";
    if (this.state.shown) {
      display = "block";
    }
    return (
      <div className="container" style={{ display: display }}>
        <nav className="verticalNav">
          <ul>
            <li>About</li>
            <li>Podcasts</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default VerticalMenu;
