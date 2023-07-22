import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import _ from "@lodash";
import { Typography } from "@mui/material";

function SequenceHeader(props) {
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
              to="/sequenceCampaigns/viewCampaign/addUser"
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
export default SequenceHeader;
