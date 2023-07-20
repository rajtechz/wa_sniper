import { Switch, Typography,Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddUser() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <>
    
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="#0000FF" fontWeight="bold">
            Add user
          </Typography>
        </Box>

        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              p: 2,
              border: "1px solid #ccc",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
              width: "100%", // Set the input field to full width
            }}
          >
            <Box>
              <TextField
                fullWidth // Use fullWidth prop instead of width
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Full Name"
              />
            </Box>

            <Box sx={{ display: "flex" }}>
              <TextField
                sx={{ flex: 1 }} // Use mr: 1 to add horizontal margin (gap) between the input fields
                fullWidth
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Email"
              />
              <Box sx={{ width: 20 }} />
              <TextField
                sx={{ flex: 1 }} // Use flex: 1 to make the input fields share equal width
                fullWidth
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Mobile"
              />
            </Box>

            <Box sx={{ display: "flex" }}>
              <TextField
                sx={{ flex: 1 }} // Use mr: 1 to add horizontal margin (gap) between the input fields
                fullWidth
                helperText=" "
                label="Password"
              />
              <Box sx={{ width: 20 }} />
              <TextField
                sx={{ flex: 1 }} // Use flex: 1 to make the input fields share equal width
                fullWidth
                helperText=" "
                label="Confirm Password"
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Address"
              />
            </Box>
            <Box>
              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <Typography> User Type </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormControlLabel
                      control={
                        <Switch defaultChecked size="medium" name="Member" />
                      }
                      label="Member"
                    />

                    <FormControlLabel
                      control={
                        <Switch defaultChecked size="medium" name="Admin" />
                      }
                      label="Admin"
                    />
                    <Box></Box>
                  </Box>

                  <Box>
                    <FormControl sx={{ m: 1, width: "100%" }}>
                      <InputLabel id="demo-multiple-name-label">
                        Package
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Typography> Status </Typography>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch defaultChecked size="medium" name="Active" />
                      }
                      label="Active"
                    />
                  </Box>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DatePicker", "DatePicker", "DatePicker"]}
                    >
                      <DatePicker label="Picker with helper text" />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ justifyContent: "space-between", display: "flex", pt: 3 }}>
            <Typography>Package Manager</Typography>
            <Button variant="contained" color="secondary" style={{ borderRadius: 5, backgroundColor: 'white', color:"black",border:"1px solid gray"  }}onClick={handleCancelClick}>
        Cancel
      </Button>
          </Box>
        </Box>
      
    </>
  );
}
