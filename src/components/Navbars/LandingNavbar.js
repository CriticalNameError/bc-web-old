import React from "react";
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




import {primary} from "helpers/colorScheme";

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
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
     
        color={
        
           "white"
          
        }
        expand="lg"
        className={
        
            " fixed-top "
        }
      >
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
            <a class="navbar-brand pull-left" href="/">
              
              <img src="https://bcassets.s3.amazonaws.com/static/images/schwarz.height-70.png" alt="Berghaus &amp; Cie."/>
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
         
          <div className="navbar-toggle top-right-toggler d-fixed">
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
            className="justify-content-start"
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
           
            <Nav navbar>
              <NavItem>
                <a href="/wein-investments" className="nav-link" style={{color: "#888"}}>
                  {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                  <p>
                    <span className="d-lg-inline d-md-block">Weininvestments</span>
                  </p>
                </a>
              </NavItem>
              <NavItem>
              <a href="/ueber-uns" className="nav-link" style={{color: "#888"}}>
                  {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                  <p>
                    <span className="d-lg-inline d-md-block">Über uns</span>
                  </p>
                </a>
              </NavItem>
              <NavItem>
              <a href="/blog" className="nav-link" style={{color: "#888"}}>
                  {/* <i className="now-ui-icons media-2_sound-wave" /> */}
                  <p>
                    <span className="d-lg-inline d-md-block">Blog</span>
                  </p>
                </a>
              </NavItem>
              <NavItem>
              <a href="/login" className="nav-link" style={{color: "#888"}}>
                
                  <p>
                  <i className="fas fa-sign-in-alt pr-3 fa-fw" style={{color: primary, fontSize: "1.15em"}} />
                    <span className="d-lg-inline d-md-block">Weindepot</span>
                 
              
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
    );
  }
}

export default LandingNavbar;