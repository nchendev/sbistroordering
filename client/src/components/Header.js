import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  AccountCircle,
} from "./mui_index";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "80vw",
  },
  fab2: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "40vw",
  },
  fabSpace: {
    margin: theme.spacing(1),
    height: "40px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(false);
  const [name, setName] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let storage = localStorage;
  useEffect(() => {
    // if user is logged in set state
    if (
      storage.getItem("information") === null ||
      storage.getItem("information") === "undefined"
    )
      storage = sessionStorage;
    if (
      storage.getItem("information") !== "undefined" &&
      storage.getItem("information") !== null
    ) {
      setAuth(true);
      setName(JSON.parse(storage.getItem("information")).name);
    }
  });

  const handleLogout = (e) => {
    setAuth(false);
    setName("");
    storage.removeItem("information");
    storage = localStorage;
    props.resetInformationState();
    console.log("logging user out");
  };
  const handleRegister = (e) => {
    props.history.push("/register");
  };
  const handleLogin = (e) => {
    props.history.push("/login");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <img
            src={logo}
            height='40vh'
            width='40vh'
            className={classes.margin}
          />

          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle fontSize='large' />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {auth ? (
                <div>
                  <MenuItem disabled={true} divider>
                    <Typography variant='h6' className={classes.title}>
                      Hello {name}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </div>
              ) : (
                <div>
                  <Typography variant='h6' className={classes.title}>
                    Hello Guest
                  </Typography>
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                  <MenuItem onClick={handleRegister}>Register</MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
