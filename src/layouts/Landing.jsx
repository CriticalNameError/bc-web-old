/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPage from "../views/LandingPage";
import AboutUs from "../views/AboutUs"
import BlogPage from "../views/BlogPage";
import WineInvestments from "../views/WineInvestments";


import { connect } from 'react-redux';
import PostPage from "../views/PostPage.jsx";
// import { manageSession } from '../reducers';

var ps;

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (event) => dispatch(setCurrentUser(event.target.value))
//   }
// }


class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue",
    
  };
  mainPanel = React.createRef();
  

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    console.log("PPPPPPP", this.props)
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleColorClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    const {currentUser} = this.props;
    return (
     
      <div className="wrapper">
        {/* <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        /> */}
       
          <LandingNavbar {...this.props} user={this.state.currentUser} />
        
           <BrowserRouter>
          <Switch>
            {/* {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
             
              );
            })} */}
             {/* <Route path="/admin/vintage/:id"  render={props => <VintageDetail {...props}/>} />
             <Route path="/admin/chateaus/:id"  render={props => <Chateaus {...props}/>} />
             <Route path="/admin/invoices" render={props => <Bills {...props}/>} /> */}
          
                <Route path="/start"  component={LandingPage} />
                <Route path="/wein-investments"  component={WineInvestments} />
                <Route path="/ueber-uns"  component={AboutUs} />
                <Route path="/blog/:slug" component={PostPage} />
                <Route path="/blog"  component={BlogPage} />
                  <Redirect from="/" to="/start" /> 
              
           
           
          </Switch>
          </BrowserRouter>
        
       
      
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
