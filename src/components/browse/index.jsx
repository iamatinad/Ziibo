import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";

function Browsecomponents() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="success" {...bindTrigger(popupState)}>
            Browse
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <Link to="/Genres">Genres</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/Movies">Movies</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/Seriesc">Series</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/Topc">Top IMDb</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link to="/userratings">User Ratings</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Browsecomponents;
