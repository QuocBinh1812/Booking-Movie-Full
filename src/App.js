import logo from "./logo.svg";

import { createBrowserHistory } from "history";
import {
  Switch,
  Router,
  Redirect,
  Route,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTeplate";

import { lazy, Suspense } from "react";
import Detail from "./pages/Detail/Detail";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import { UserTemplate } from "./templates/UserTemplate/UseTemplate";
import TrangLoading from "./components/Loading/TrangLoading";

import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import DetailMobile from "./pages/Detail/DetailMobile";
//import User from "./pages/Admin/QuanLyNguoiDung/User/User";
//import AddUser from "./pages/Admin/QuanLyNguoiDung/AddUser/AddUser";
//import EditUser from "./pages/Admin/QuanLyNguoiDung/EditUser/EditUser";

export const history = createBrowserHistory();

const Home = lazy(() => import("./pages/Home/Home"));
const HomeMobile = lazy(() => import("./pages/Home/HomeMobile"));
const News = lazy(() => import("./pages/News/News"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
// const Films = lazy(() => import('./pages/Admin/Films/Films'))
const Films1 = lazy(() => import("./pages/Admin/Films/Films1"));
const Edit = lazy(() => import("./pages/Admin/Films/Edit/Edit"));
const Dashboard = lazy(() => import("./pages/Admin/QuanLyNguoiDung/User/User"));
const ShowTime = lazy(() => import("./pages/Admin/ShowTime.js/ShowTime"));
const AddNew = lazy(() => import("./pages/Admin/Films/AddNew/AddNew"));
const User = lazy(() => import("./pages/Admin/QuanLyNguoiDung/User/User"));
const AddUser = lazy(() =>
  import("./pages/Admin/QuanLyNguoiDung/AddUser/AddUser")
);
const EditUser = lazy(() =>
  import("./pages/Admin/QuanLyNguoiDung/EditUser/EditUser")
);

function App() {
  return (
    <Router history={history}>
      <TrangLoading />
      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "Tomato",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99,
            }}
          >
            <div className="text-4xl text-white">
              <div className="loader">Loading...</div>
            </div>
          </div>
        }
      >
        <Switch>
          <Redirect from="/home" to="/"></Redirect>
          <HomeTemplate
            path="/"
            exact
            Component={Home}
            ComponentMobile={HomeMobile}
          />

          <HomeTemplate path="/news" exact Component={News} />
          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate
            path="/detail/:id"
            exact
            Component={Detail}
            ComponentMobile={DetailMobile}
          />

          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

          {/* <HomeTemplate path="/" exact Component={Home} /> */}
          <UserTemplate path="/login" exact Component={Login} />
          <UserTemplate path="/register" exact Component={Register} />

          <AdminTemplate path="/admin/Films" exact Component={Films1} />
          <AdminTemplate path="/admin/Films/addnew" exact Component={AddNew} />
          <AdminTemplate path="/admin/Films/edit/:id" exact Component={Edit} />
          <AdminTemplate
            path="/admin/showtime/:id/:tenPhim"
            exact
            Component={ShowTime}
          />

          <AdminTemplate path="/admin/user" exact Component={User} />
          <AdminTemplate path="/admin/adduser" exact Component={AddUser} />
          <AdminTemplate
            path="/admin/edituser/:taiKhoan"
            exact
            Component={EditUser}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
