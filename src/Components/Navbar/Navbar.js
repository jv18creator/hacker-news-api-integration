import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginLeftLinkHeader: {
    marginLeft: "12px",
  },
  removeUnderLineDecoration: {
    textDecoration: "none",
    color: "#FFF",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [showSideMenuLinks, setShowSideMenuLinks] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              onClick={() => setShowSideMenuLinks(!showSideMenuLinks)}
            />
          </IconButton>
          <img src="https://news.ycombinator.com/y18.gif" />
          <Typography
            variant="h6"
            className={`${classes.title} ${classes.marginLeftLinkHeader}`}
          >
            <Link to="/" className={classes.removeUnderLineDecoration}>
              Hacker News
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {showSideMenuLinks && (
        <SideMenuLinks setShowSideMenuLinks={setShowSideMenuLinks} />
      )}
    </div>
  );
}
