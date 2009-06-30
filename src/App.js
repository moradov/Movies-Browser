import React, { Fragment, useContext } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import globalContext from "./context/global/globalContext";
import { Provider } from "react-redux";
import Navbar from "./component/UI/Navbar/Navbar";
import Home from "./component/Home/Home";
import Search from "./pages/Search/Search";
import Model from "./component/UI/Model/Model";
import store from "./store";

const App = () => {
  const { model } = useContext(globalContext);
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        {model.display ? <Model msg={model.msg} /> : null}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
        </Switch>
      </Provider>
    </Fragment>
  );
};

export default App;
