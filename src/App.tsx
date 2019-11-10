import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import TodoContainer from "./TodoContainer";
import GLTestContainer from "./GLTestContainer";
import ErrorDisplay from "./ErrorDisplay";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <TodoContainer />} />
          <Route exact path="/hoge" render={() => <GLTestContainer />} />
          <Route render={() => <div>Unexpected path</div>} />
        </Switch>
      </ConnectedRouter>
      <ErrorDisplay />
    </Provider>
  );
};
export default App;
