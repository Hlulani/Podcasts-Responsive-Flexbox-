import React from "react";
import "./MainLayout.css";

class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <nav>
                    <ul id="menulist">
                        <li className="menuitem">About</li>
                        <li className="menuitem">Podcasts</li>
                        <li className="menuitem">Contact</li>
                    </ul>
                </nav>

                <div id="main">
                    <h1> 1. Podcasts 101!</h1>
                    <p>
                        This example shows a menu that will float to the left of the page if
                        the viewport is 480 pixels wide or wider. If the viewport is less
                        than 480 pixels, the menu will be on top of the content.
          </p>
                </div>

                <div id="content">
                    <div className="full-screen">
                        <h1>2. Podcasts only for desktop users!</h1>
                        <p>
                            This example shows a menu that will float to the left of the page
                            if the viewport is 480 pixels wide or wider. If the viewport is
                            less than 480 pixels, the menu will be on top of the content.
            </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainLayout;
