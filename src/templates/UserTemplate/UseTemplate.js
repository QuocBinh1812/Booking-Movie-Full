import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";


export const UserTemplate = (props)=>{
    const {Component, ...restProps}=props;
   
    return <Route {...restProps} render={(propsRoute) =>{//props.location, props.history,props.match
        return <Fragment>
            <Component {...propsRoute}/>
            
        </Fragment>

    }}/>
}
