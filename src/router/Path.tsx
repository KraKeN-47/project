import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { selectUserTypeState } from "../modules/userType/userType.selector";
import { Routes } from "../types/types";

const ProtectedRoute = (props: any) => (
  <>
    {props.userLevel !== undefined && props.userLevel < props.level ? (
      <Route {...props} />
    ) : (
      <Redirect to="/" />
    )}
  </>
);

const Path = (props: Routes) => {
  const userType = useSelector(selectUserTypeState);

  return (
    <>
      {props.protected ? (
        <ProtectedRoute {...props} {...userType} />
      ) : (
        <Route {...props} />
      )}
    </>
  );
};

export default Path;
