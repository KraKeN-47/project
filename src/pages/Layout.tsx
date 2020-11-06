import { Box, Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectUserTypeState } from "modules/userType/userData.selector";
import { setUserType } from "modules/userType/userData.slice";
import { paths } from "router/paths";

const Layout = ({ children }: any) => {
  const userData = useSelector(selectUserTypeState);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUserType({ id: -1, level: 0, name: "" }));
    alert("Sėkmingai atsijungėte");
  };
  return (
    <Box id="layout" width="100%" height="100%">
      <Box display="flex">
        {userData.level > 0 && (
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        )}
        {userData.level >= 2 && (
          <div style={{ paddingLeft: "20px" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(paths.adminPage)}
            >
              Admin puslapis
            </Button>
          </div>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
