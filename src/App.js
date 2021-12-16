import { BrowserRouter, Route, Switch ,Router} from 'react-router-dom'
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
//Cấu hình history
import { createBrowserHistory} from 'history'
import HOC from './_pages/HOC/HOC';
import Modal from './_pages/HOC/Modal';
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import HomeMoBile from './_pages/Home/HomeMoBile';
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      {/* <HeaderHome /> */}
      <Modal />
      <Switch>
        <HomeTemplate exact path="/about" Component={About} />
        <HomeTemplate exact path="/home" Component={HomePage} MobileComponent={HomeMoBile}/>
        <HomeTemplate exact path="/hoc" Component={HOC} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/usestate" Component={DemoUseState} />
        <HomeTemplate exact path="/useeffect" Component={DemoUseEffect} />
        <HomeTemplate exact path="/usememo" Component={DemoUseMemo} />
        <HomeTemplate exact path="/useref" Component={DemoUseRef} />
        <HomeTemplate exact path="/hookredux" Component={DemoHookRedux} />
        <HomeTemplate exact path="/functionapi" Component={FuncApi} />
        <HomeTemplate exact path="/classapi" Component={ClassApi} />
        <HomeTemplate exact path="/middleware" Component={MiddleWareRedux} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <HomeTemplate exact path="/detail/:maPhim" Component={Detail} />

        {/* Trang chủ được load mặc định */}
        <HomeTemplate exact path="/" Component={HomePage} MobileComponent={HomeMoBile} />
      </Switch>

      {/* <Route path="/demo" render={(propsRoute) => {
        return <div>
          abc
          <br />
          <HomePage {...propsRoute} />
        </div>
      }} /> */}
    </Router>
  );
}

export default App;
