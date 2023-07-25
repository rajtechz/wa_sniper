import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useState } from "react";
import _ from "@lodash";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import DateRangeIcon from "@material-ui/icons/DateRange";
import IconButton from "@mui/material/IconButton";
import { MenuItem, Popover } from "@material-ui/core";
import EventIcon from "@mui/icons-material/Event";
import { DatePicker } from "@mui/lab";
import DateRange from "./DateRange";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { useState } from 'react';
// import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
// import { selectProductsSearchText, setProductsSearchText } from '../store/productsSlice';

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

function OtnBroadcastHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [age, setAge] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  // const [opend, setOpend] = useState(false);

  // const handleClickOpen = () => {
  //   setOpend(true);
  // };

  // const handleClosed = () => {
  //   setOpend(false);
  // };

  const handleCalenderClick = () => {
    console.log("ddddd");
    setShowCalendar(true);
  };

  const handleDateChange = (date) => {
    // Do something with the selected date
    console.log("ssssss");

    console.log(date);

    // Hide the calendar
    setShowCalendar(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "custom-range-popover" : undefined;

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [data, setData] = useState(null);

  // const handleLoginSuccess = (response) => {
  //   if (response.status === 'connected') {
  //     setIsLoggedIn(true);
  //     // Make the second API call to show data for the dashboard page

  //       axios
  //       .get('your-second-api-endpoint')
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   }

  // };

  //   useEffect(() => {
  //     if (isLoggedIn && data !== null) {
  //       window.location.reload();
  //     }
  //   }, [isLoggedIn, data]);
  //   const dispatch = useDispatch();
  //   const searchText = useSelector(selectProductsSearchText);

  return (
    <>
      {/* <div>
        <p className='h3 font-weight-bold text-capitalize'>You have not connected yet</p>

        {!isLoggedIn && (
          <FacebookLogin
            appId="2031394480402743"
            fields="name,email,picture"
            callback={handleLoginSuccess}
            render={(renderProps) => (
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                onClick={renderProps.onClick}
              >
                Login with Facebook
              </Button>
            )}
          />
        )}
        {isLoggedIn}
      </div> */}
      <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
        <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            color="secondary"
            startIcon={<DateRangeIcon />}
          >
            Choose Date
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              This Month
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Last Month
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem disableRipple>
              
              <DateRange />

            </MenuItem>

            {showCalendar && (
              <DatePicker
                open={showCalendar} // Pass the showCalendar state as the open prop
                onClose={() => setShowCalendar(false)}
                value={null} // Add a value prop if needed
                onChange={handleDateChange}
                // You can customize the DatePicker with additional props
              />
            )}
          </StyledMenu>
        </div>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label h2">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status.value}
                label="Status"
                color="secondary"
                onChange={handleChange}
              >
                <MenuItem value={20}>Pending</MenuItem>
                <MenuItem value={50}>Processing</MenuItem>
                <MenuItem value={30}>Complete</MenuItem>
                <MenuItem value={40}>Stopped</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
              // to="/apps/e-commerce/products/new"
              variant="contained"
              color="secondary"
              startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
            >
              Create Campaign
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default OtnBroadcastHeader;
