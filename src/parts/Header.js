import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

import IconKerangjang from "assets/images/icons/icon_keranjang.svg";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sms">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <IconText />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>

              <li className={`nav-item${getNavLinkClass("/category")}`}>
                <Button className="nav-link" type="link" href="/category">
                  Category
                </Button>
              </li>

              <li className={`nav-item${getNavLinkClass("/designer")}`}>
                <Button className="nav-link" type="link" href="/designer">
                  Designer
                </Button>
              </li>

              <li className={`nav-item${getNavLinkClass("/about")}`}>
                <Button className="nav-link" type="link" href="/about">
                  About
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/mychart")}`}>
                <Button className="nav-link" type="link" href="/mychart">
                  <img src={IconKerangjang} />
                  <span>
                    My Chart(<span className="text-gray-900">12</span>)
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
