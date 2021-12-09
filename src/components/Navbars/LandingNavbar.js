import React, { useEffect, useState, useCallback } from "react";
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
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import MobilePhone from "../../icons/mobile-phone";
import Mail from "../../icons/mail";
import { withRouter } from "next/router";
import { ImageFromCms } from "../../helpers/utils";
import { primary, primary_t60 } from "helpers/colorScheme";
import LogIn from "icons/log-in";
import LogoLav from "icons/logo_lav";
import LogoSpotify from "icons/logo-spotify";
import Sound from "icons/sound";
import SpotifyLogoWithText from "icons/Spotify_logo_with_text";
import { useScrollDirection } from "react-use-scroll-direction";
// export const trackFullpagePage = () => {
//   const [page, setPage] = useState(null);
//   useEffect(()=>{setPage(window.fullpage_api.getActiveSection().index)}, [window.fullpage_api])
//   return page

// }

const ContactBar = (props) => {
  const [scrollY, setScrollY] = useState(0);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 836) {
        if (window.scrollY == 0) {
          document.getElementById("vert-nav").classList.add("d-block");
        } else if (window.scrollY - lastScrollY <= 0) {
          document
            .getElementById("vert-nav")
            .classList.remove("animated", "slideOutUp", "faster");
          document
            .getElementById("vert-nav")
            .classList.add("animated", "slideInDown", "faster");
        } else if (window.scrollY - lastScrollY > 0) {
          document
            .getElementById("vert-nav")
            .classList.remove("animated", "slideInDown", "faster");
          document
            .getElementById("vert-nav")
            .classList.add("animated", "slideOutUp", "faster");
        }
        lastScrollY = window.scrollY;
      }
      setScrollY(window.scrollY);
      if (window.scrollY > 0) {
        document.getElementById("vert-nav").classList.remove("pt-5");
        document.getElementById("nav-tgl").classList.remove("pt-2");
        document.getElementById("nav-tgl").classList.remove("mt-4");
      } else {
        document.getElementById("vert-nav").classList.add("pt-5");
        document.getElementById("nav-tgl").classList.add("pt-2");
        document.getElementById("nav-tgl").classList.add("mt-4");
        
      }
      if( window.innerWidth < 836){
        if (window.scrollY == 0) {
        document.getElementById("navbrand").classList.add("mt-n1")
        }
        if (window.scrollY > 0) {
          document.getElementById("navbrand").classList.remove("mt-n1")
        }
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
          className={
            "justify-content-space-between p-2 pl-4 text-white bg-gradient"
          }
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "3em",
            fontSize: "0.9em",
            fontFamily: "Montserrat,Helvetica Neue,Arial,sans-serif",
            //backgroundColor: primary_t60
          }}
        >
          <span>
            {/* <span
              className={"now-ui-icons tech_mobile"}
              style={{ verticalAlign: "middle" }}
            >

              </span>{" "} */}

            <span className={"pr-3 pr-md-5"}>
              <a className={"text-white"} href="tel: +4915167310664">
                <span style={{ verticalAlign: "middle" }}>
                  <MobilePhone width={"14px"} height={"14px"} strokewidth={3} />
                </span>
                <span className={"pl-2"} style={{ verticalAlign: "middle" }}>
                +49 2207 90198 91
                </span>
              </a>
            </span>
            {/* <span
              className={"now-ui-icons ui-1_email-85 pr-2"}
              style={{ verticalAlign: "middle" }}
            ></span> */}
            <a className={"text-white"} href="mailto: contact@berghaus-cie.com">
              <span style={{ verticalAlign: "middle" }}>
                <Mail width={"14px"} height={"14px"} strokewidth={3} />
              </span>
              <span className={"pl-2"} style={{ verticalAlign: "middle" }}>
                contact@berghaus-cie.com
              </span>
            </a>
          </span>
        </div>
      ) : null}
    </>
  );
};

class LandingNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "white",
      showPodcastModal: false,
    };
    this.toggleShowPodcastModal = this.toggleShowPodcastModal.bind(this);
  }
  sidebarToggle = React.createRef();

  toggleShowPodcastModal = () => {
    this.setState({ showPodcastModal: !this.state.showPodcastModal });
  };

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
        <Modal
          isOpen={this.state.showPodcastModal}
          toggle={() => this.toggleShowPodcastModal()}
          className="modal-md modal-dialog-centered"
        >
          <ModalBody className="py-4 px-3">
            <i
              className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-primary"
              style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
              onClick={(e) => {
                this.toggleShowPodcastModal();
              }}
            ></i>

            <div class="text-center">
              <h4 class="" style={{ fontSize: "18px" }}>
                Der Weininvestment-Podcast
              </h4>
              <div className={""}>
                <a
                  href={"https://spotify.de/rausch_und_rendite"}
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                  className={"text-dark transp-card"}
                >
                  <span class="round-icon-lg text-white">
                    <span style={{ width: "40px", height: "40px" }}>
                      <Sound width={"40px"} height={"40px"} strokewidth={3} />
                    </span>
                  </span>

                  <p>
                    <h3 className={"mb-0 h5 mt-2"} style={{ fontSize: "18px" }}>
                      Rausch & Rendite
                    </h3>
                    <b className={"text-primary"}>Jetzt reinhören</b>
                    <div className={"mt-2"}>
                      <SpotifyLogoWithText width={"100px"} strokewidth={3} />
                    </div>
                  </p>
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
        <Navbar
          color={"white"}
          expand="lg"
          className={"fixed-top pt-5 d-none d-block"}
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
              <a id={"navbrand"} class="navbar-brand pull-left mt-0 mt-lg-0" href="/">
                <span
                  style={{ display: "inline-block" }}
                  className={"text-primary"}
                >
                  <LogoLav width={"175px"} />
                </span>
                {/* <ImageFromCms title={"logo_primary"} width={175}></ImageFromCms> */}
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

            <div
              className="navbar-toggle top-right-toggler d-fixed mt-4 pt-2 mt-lg-0 pt-lg-0"
              id={"nav-tgl"}
            >
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

              <Nav navbar className={"w-100"} style={{ marginBottom: "-7px" }}>
                <NavItem style={{ position: "relative" }}>
                  <a
                    href="/"
                    className={
                      "nav-link " +
                      (this.props.router.pathname == ""
                        ? "link-active"
                        : "link-underline")
                    }
                    style={{
                      color: this.props.router.pathname == ""
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                   <p>
                      <span className="d-lg-inline d-md-block">
                        Weininvestments
                      </span>
                    </p>
                  </a>
                </NavItem>
{/* 
                <NavItem style={{ position: "relative" }}>
                  <a
                    href="/faq"
                    className={
                      "nav-link " +
                      (/faq/.test(this.props.router.pathname)
                        ? "link-active"
                        : "link-underline")
                    }
                    style={{
                      color: /faq/.test(this.props.router.pathname)
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    <p>
                      <span className="d-lg-inline d-md-block">
                        FAQ
                      </span>
                    </p>
                  </a>
                </NavItem> */}

                {/* <NavItem
                  onClick={() => this.toggleShowPodcastModal()}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <a
                    className="nav-link link-underline"
                    style={{
                      color: "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                    <p style={{ cursor: "pointer" }}>
                      <span className="d-lg-inline d-md-block">
                        Rausch & Rendite
                      </span>
                    </p>
                  </a>
                </NavItem> */}
            
                {/* <NavItem style={{ position: "relative" }}>
                  <a
                    href="/ueber-uns"
                    className={
                      "nav-link " +
                      (/ueber-uns/.test(this.props.router.pathname)
                        ? "link-active"
                        : "link-underline")
                    }
                    style={{
                      color: /ueber-uns/.test(this.props.router.pathname)
                        ? primary
                        : "#999",
                      marginTop: "4px",
                      fontSize: "12px",
                    }}
                  >
                   
                    <p>
                      <span className="d-lg-inline d-md-block">Über uns</span>
                    </p>
                  </a>
                </NavItem> */}
                {/* <NavItem className={"ml-lg-auto"}>
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
                      <span
                        className={"p-2 btn btn-primary m-0 mt-n2 text-white"}
                        // style={{fontSize: "1.15em" }}
                      >
                        <LogIn
                          width={"16px"}
                          height={"16px"}
                          style={{ display: "inline-block" }}
                          strokewidth={3}
                        />
                        <span
                          className="ml-1 d-lg-inline d-md-block"
                          style={{ textTransform: "none" }}
                        >
                          Weindepot
                        </span>
                      </span>
                    </p>
                  </a>
                </NavItem> */}
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
