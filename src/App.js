import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderHome from './components/HeaderHome/HeaderHome';
import About from './_pages/About';
import Contact from './_pages/Contact';
import HomePage from './_pages/HomePage';
import DemoUseEffect from './_pages/Hooks/DemoUseEffect';
import DemoUseState from './_pages/Hooks/DemoUseState';

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/usestate" component={DemoUseState} />
        <Route exact path="/useeffect" component={DemoUseEffect} />
        {/* Trang chủ được load mặc định */}
        <Route exact path="/" component={HomePage} />
      </Switch>

      {/* <Route path="/demo" render={(propsRoute) => {
        return <div>
          abc
          <br />
          <HomePage {...propsRoute} />
        </div>
      }} /> */}
    </BrowserRouter>
  );
}

export default App;
