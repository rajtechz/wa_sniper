import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Grid, Button } from '@mui/material';
import Divider from "@mui/material/Divider";
import {
  selectFilteredContacts,
  selectGroupedFilteredContacts,
} from "./store/contactsSlice";
import ContactListItem from "./ContactListItem";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UserTable from "./UserTable";



const styles = {
  customButton: {
    backgroundColor: '#1976d2', // Replace with the primary color value you want
    borderRadius: 2,

  },
};


function ContactsList(props) {
  const filteredData = useSelector(selectFilteredContacts);
  const groupedFilteredContacts = useSelector(selectGroupedFilteredContacts);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Typography color="text.secondary" variant="h5">
          There are no contacts!
        </Typography>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex flex-col flex-auto w-full max-h-full"
    >
      <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Search" variant="outlined" /> */}
      <Button variant="contained" color="primary" style={styles.customButton}>
        Options
      </Button>
    </Box>
      <UserTable />
      {/* 

      {Object.entries(groupedFilteredContacts).map(([key, group]) => {
        return (
          <div key={key} className="relative">
            <Typography
              color="text.secondary"
              className="px-32 py-4 text-14 font-medium"
            >
              {key}

             
            </Typography>
            <Divider />
            <List className="w-full m-0 p-0">
              {group.children.map((item) => (
                <ContactListItem key={item.id} contact={item} />
              ))}
            </List>
          </div>
        );
      })}


       */}
    </motion.div>
  );
}

export default ContactsList;
