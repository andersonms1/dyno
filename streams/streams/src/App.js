import { Router, Route } from "react-router-dom";
import React from "react";
import {
  StreamCreate,
  StreamShow,
  StreamDelete,
  StreamEdit,
  StreamList,
} from "./components/streams";
import history from "./history";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
