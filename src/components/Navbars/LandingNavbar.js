import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";
import { withRouter } from "next/router";
import { ImageFromCms } from "../../helpers/utils";
import { primary } from "helpers/colorScheme";

// export const trackFullpagePage = () => {
//   const [page, setPage] = useState(null);
//   useEffect(()=>{setPage(window.fullpage_api.getActiveSection().index)}, [window.fullpage_api])
//   return page

// }

const ContactBar = (props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if(window.scrollY > 0){
        document.getElementById("vert-nav").classList.remove("pt-5");
        document.getElementById("nav-tgl").classList.remove("pt-2");
        document.getElementById("nav-tgl").classList.remove("mt-4");
        
      }else{
        document.getElementById("vert-nav").classList.add("pt-5");
        document.getElementById("nav-tgl").classList.add("pt-2");
        document.getElementById("nav-tgl").classList.add("mt-4");
      }
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {scrollY == 0 ? (
        <div
          id={"contact"}
          className={"justify-content-space-between p-2 pl-4"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3em",
            fontSize: "0.9em",
            backgroundColor: "#ebecf1",
            fontFamily: "Montserrat,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <span>
            <span
              className={"now-ui-icons tech_mobile"}
              style={{ verticalAlign: "middle" }}
            ></span>{" "}
            <span className={"pr-5"}>+49 172 6345 99</span>
            <span
              className={"now-ui-icons ui-1_email-85 pr-2"}
              style={{ verticalAlign: "middle" }}
            ></span>
            <span>contact@berghaus-cie.com</span>
          </span>
        </div>
      ) : null}
    </>
  );
};

class LandingNavbar extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    color: "white",
  };
  sidebarToggle = React.createRef();

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    this.sidebarToggle.current.classList.toggle("toggled");
  };
  // dropdownToggle = (e) => {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen,
  //   });
  // };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  // updateColor = () => {
  //   if (window.innerWidth < 993 && this.state.isOpen) {
  //     this.setState({
  //       color: "white",
  //     });
  //   } else {
  //     this.setState({
  //       color: "white",
  //     });
  //   }
  // };
  // componentDidMount() {
  //   window.addEventListener("resize", this.updateColor.bind(this));
  // }
  // componentDidUpdate(e) {
  //   if (
  //     window.innerWidth < 993 &&
  //     e.history.location.pathname !== e.location.pathname &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //     this.sidebarToggle.current.classList.toggle("toggled");
  //   }
  // }
  render() {
    return (
      <>
        <Navbar
          color={"white"}
          expand="lg"
          className={" fixed-top pt-5"}
          id={"vert-nav"}
          style={{ top: "0px" }}
        >
          <ContactBar />
          <Container fluid>
            {/* <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button> */}

            <NavbarBrand href="/">
              <a class="navbar-brand pull-left mt-n1 mt-lg-0" href="/">
                <ImageFromCms title={"logo_primary"} width={175}></ImageFromCms>
                {/* <img src="https://bcassets.s3.amazonaws.com/static/images/schwarz.height-70.png" alt="Berghaus &amp; Cie."/> */}
              </a>
            </NavbarBrand>
            {/* <NavItem>
                <Link to="#pablo" className="nav-link">
                  <i className="now-ui-icons media-2_sound-wave" />
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="#pablo" className="nav-link">
                  <i className="now-ui-icons media-2_sound-wave" />
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </Link>
              </NavItem> */}

            <div className="navbar-toggle top-right-toggler d-fixed mt-4 pt-2 mt-lg-0 pt-lg-0" id={"nav-tgl"}>
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler mt-n2"
                onClick={() => this.toggle()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>

            <Collapse
              isOpen={this.state.isOpen}
              navbar
              className="justify-content-start w-100"
            >
              {/* <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_zoom-bold" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}

              <Nav navbar className={"w-100"}>
                <NavItem>
                  <a
                    href="/wein-investments"
                    className="nav-link"
                    style={{
                      color: /wein-investments/.test(this.props.router.pathname)
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                    <p>
                      <span className="d-lg-inline d-md-block">
                        Weininvestments
                      </span>
                    </p>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href="/ueber-uns"
                    className="nav-link"
                    style={{
                      color: /ueber-uns/.test(this.props.router.pathname)
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                    <p>
                      <span className="d-lg-inline d-md-block">Über uns</span>
                    </p>
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href="/blog"
                    className="nav-link"
                    style={{
                      color: /blog/.test(this.props.router.pathname)
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                    <p>
                      <span className="d-lg-inline d-md-block">Blog</span>
                    </p>
                  </a>
                </NavItem>
                <NavItem className={"ml-lg-auto"}>
                  <a
                    href="https://weindepot.berghaus-cie.com"
                    className={"nav-link ml-lg-auto"}
                    style={{
                      color: "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    <p>
                      <i
                        className="fas fa-sign-in-alt pr-3 fa-fw"
                        style={{ color: primary, fontSize: "1.15em" }}
                      />
                      <span className="d-lg-inline d-md-block">Login</span>
                    </p>
                  </a>
                </NavItem>
                {/* <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={(e) => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  <i className="now-ui-icons location_world" />
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a">Action</DropdownItem>
                  <DropdownItem tag="a">Another Action</DropdownItem>
                  <DropdownItem tag="a">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(LandingNavbar);
