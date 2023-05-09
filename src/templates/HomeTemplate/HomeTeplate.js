import { Fragment, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    window.onresize = () => {
      let { innerWidth, innerHeight } = window;
      if (innerWidth <= 1024) {
        console.log(innerWidth);
        setState(false);
      } else {
        console.log(innerWidth);

        setState(true);
      }
    };
    window.onload = () => {
      let { innerWidth, innerHeight } = window;
      if (innerWidth <= 1024) {
        console.log(innerWidth);

        setState(false);
      } else {
        setState(true);
      }
    };
  }, []);

  const renderComponent = (propsRoute) => {
    if (state) {
      return <props.Component {...propsRoute} />;
    } else {
      if (props.ComponentMobile) {
        return <props.ComponentMobile {...propsRoute} />;
      }
    }
    return <props.Component {...propsRoute} />;
  };
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        console.log("propRouter", propsRoute);
        //props.location, props.history,props.match
        return (
          <Fragment>
            <Header {...propsRoute} />
            {renderComponent(propsRoute)}
            {/* <Component {...propsRoute}/> */}
            <hr />
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
