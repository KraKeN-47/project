import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { selectUserTypeState } from "../modules/userType/userType.selector";
import { IUserType, Routes } from "../types/types";

interface ProtectedRouteProps {
  userType: IUserType;
  routeProps: Routes;
}

const ProtectedRoute = ({ routeProps, userType }: ProtectedRouteProps) => (
  <>
    {routeProps.userLevel !== undefined &&
    routeProps.userLevel <= userType.level ? (
      <Route {...routeProps} />
    ) : (
      <Redirect to="/" />
    )}
  </>
);

const Path = (props: Routes) => {
  const userType = useSelector(selectUserTypeState);
  const protectedRouteProps: ProtectedRouteProps = {
    routeProps: props,
    userType,
  };
  return (
    <>
      {props.protected ? (
        <ProtectedRoute {...protectedRouteProps} />
      ) : (
        <Route {...props} />
      )}
    </>
  );
};

export default Path;
