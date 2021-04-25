import { Switch, Route } from 'react-router';

import './App.css';
import Navigation from './components/navigation';
import Comments from './pages/comments';
import Home from './pages/home';

import Todos from './pages/todos/todos';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/todos">
          <Todos />
        </Route>

        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/">
          <Home title="Home" description="mariam tsotsolashvili" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
