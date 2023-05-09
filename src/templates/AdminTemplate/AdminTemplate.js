import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { USER_LOGIN } from "../../util/settings/Config";
import { history } from "../../App";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);
  // const onCollapse = collapsed =>{
  //     setCollapsed(collapsed);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này");
    return <Redirect to="/" />;
  }
  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Bạn không có quyền truy cập vào trang này");
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history,props.match
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider>
                <img
                  src="https://s-media-cache-ak0.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
                  alt="https://s-media-cache-ak0.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif"
                  style={{ width: "100%", height: "64px" }}
                />

                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  {/* <Menu.Item key="1" icon={<UserOutlined />} onClick={() =>{
              history.push('/admin/dashboard');
            }}>
              user
            </Menu.Item> */}
                  <SubMenu
                    key="sub1"
                    icon={<UserAddOutlined />}
                    title="User management"
                  >
                    <Menu.Item key="1">
                      <NavLink to="/admin/user">user</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <NavLink to="/admin/adduser">add user</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <NavLink to="/admin/edituser/:id">edit user</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<VideoCameraOutlined />}
                    title="Movie manager"
                  >
                    <Menu.Item key="4">
                      <NavLink to="/admin/Films">films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <NavLink to="/admin/Films/addnew">add films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <NavLink to="/admin/Films/edit/:id">edit films</NavLink>
                    </Menu.Item>
                  </SubMenu>

                  {/* <Menu.Item key="6" icon={<DesktopOutlined />} onClick={() =>{
              history.push('/admin/showtime/:id');
            }}>
              Show time
            </Menu.Item> */}
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                />
                <Content style={{ margin: "0 16px" }}>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Quản lý phim </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
export default AdminTemplate;
