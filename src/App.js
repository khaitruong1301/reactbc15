import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderHome from './components/HeaderHome/HeaderHome';
import About from './_pages/About';
import Contact from './_pages/Contact';
import ClassApi from './_pages/DemoApi/ClassApi';
import FuncApi from './_pages/DemoApi/FuncApi';
import MiddleWareRedux from './_pages/DemoApi/MiddleWareRedux';
import Detail from './_pages/Detail';
import HomePage from './_pages/HomePage';
import DemoHookRedux from './_pages/Hooks/DemoHookRedux/DemoHookRedux';
import DemoUseEffect from './_pages/Hooks/DemoUseEffect';
import DemoUseMemo from './_pages/Hooks/DemoUseMemo/DemoUseMemo';
import DemoUseState from './_pages/Hooks/DemoUseState';
import DemoUseRef from './_pages/Hooks/UseRef/DemoUseRef';
import Login from './_pages/Login';
import Register from './_pages/Register';

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
        <Route exact path="/usememo" component={DemoUseMemo} />
        <Route exact path="/useref" component={DemoUseRef} />
        <Route exact path="/hookredux" component={DemoHookRedux} />
        <Route exact path="/functionapi" component={FuncApi} />
        <Route exact path="/classapi" component={ClassApi} />
        <Route exact path="/middleware" component={MiddleWareRedux} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/detail/:maPhim" component={Detail} />

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
