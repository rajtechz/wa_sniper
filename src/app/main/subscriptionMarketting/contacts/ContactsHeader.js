import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useState } from "react";
import _ from "@lodash";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AddUser from "./AddUser";


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function ContactsHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [age, setAge] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "custom-range-popover" : undefined;




  return (
    <>
      <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            color="primary"
          >
            User manager
          </Typography>
        </Box>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
       
          <Paper
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
          >
            <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

            <Input
              placeholder="Search..."
              className="flex flex-1"
              disableUnderline
              fullWidth
              inputProps={{
                "aria-label": "Search",
              }}
            />
          </Paper>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className=""
              component={Link}
              to="/subscriptionMarketting/contactGroups/addUser"
              variant="contained"
              color="secondary"
              startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
            >
              New user
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ContactsHeader;
