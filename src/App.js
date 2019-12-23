import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux
import { connect } from "react-redux";
import { fetchUser } from "./redux/firebase-actions";
// Components
import Home from "./components/home";
import Header from "./components/header";
import Public from "./components/public";
import Private from "./components/private";
import Login from "./components/login";
import Register from "./components/register";
import PrivateRoute from "./components/private-route";

function App({ fetchUser }) {
  useLayoutEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <section className="section">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/public" component={Public} />
            <PrivateRoute path="/private" component={Private} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>

          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </section>
    </Router>
  );
}

export default connect(null, { fetchUser })(App);
