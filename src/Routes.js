import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import { theme } from "./Styles/Theme";
import Nav from "./Components/Nav/Nav";
import {
  BookDetails,
  SearchDefault,
  SearchResult,
  MyBooksManager,
  MyBooks,
  Category,
  Payments,
  Subscribe,
  SetAccount,
  PhoneValidate,
  Signup,
  Login,
  WellieMain,
} from "./Pages";

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={WellieMain} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/phone_validate" component={PhoneValidate} />
              <Route exact path="/set_account" component={SetAccount} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Route exact path="/payments" component={Payments} />
              <Route exact path="/my_books" component={MyBooks} />
              <Route
                exact
                path="/my_books_manager"
                component={MyBooksManager}
              />
              <Route exact path="/book_details/:id" component={BookDetails} />
              <Route path="/category/:id" component={Category} />
              <Route path="/home" component={SearchDefault} />
              <Route path="/search_result" component={SearchResult} />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default Routes;
