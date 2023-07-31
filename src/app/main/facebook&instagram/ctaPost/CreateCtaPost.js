import {
  Typography,
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import useState from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LinkIcon from "@mui/icons-material/Link";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import VideocamIcon from "@mui/icons-material/Videocam";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  // Add more options as needed
];

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

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Typography component="div">{children}</Typography>}
    </div>
  );
};

export default function CreateCtaPost() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

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

  
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#000fff", fontSize: "16px", fontWeight: "bold" }}
            >
              <TelegramIcon />
              Multimedia posting
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "#000fff" }}>Social Posting/</Typography>
            <Typography sx={{ color: "#000fff" }}>Multimedia post/</Typography>
            <Typography>Multimedia post</Typography>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid item xs={3} md={3}>
              <Paper square sx={{ p: 1 }}>
                <Box>
                  <Typography
                    variant="body1"
                    component="div"
                    display="flex"
                    alignItems="center"
                    sx={{ color: "#000FFF", fontWeight: "bold" }}
                  >
                    <ReplyIcon sx={{ marginRight: "0.5rem" }} />
                    Publish
                  </Typography>
                  <Box mt={2}>
                    <TextField
                      placeholder="search..."
                      sx={{ mt: 1 }}
                      size="small"
                      fullWidth
                    />
                  </Box>
                  <Divider mb={2} mt={2} />
                  <Box sx={{ display: "flex", mt: 2 }}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Pages"
                    />
                    <Autocomplete
                      fullWidth
                      options={options}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          placeholder="select"
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6}>
              <Paper square sx={{ p: 1 }}>
                <Box>
                  <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab
                      label={
                        <Typography variant="subtitle1">
                          <TextSnippetIcon />
                          <strong>Text</strong>
                        </Typography>
                      }
                    />
                    <Tab
                      label={
                        <Typography variant="subtitle1">
                          <LinkIcon />
                          <strong>Link</strong>
                        </Typography>
                      }
                    />
                    <Tab
                      label={
                        <Typography variant="subtitle1">
                          <CropOriginalIcon />
                          <strong>Image/Carousel</strong>
                        </Typography>
                      }
                    />
                    <Tab
                      label={
                        <Typography variant="subtitle1">
                          <VideocamIcon />
                          <strong>Video</strong>
                        </Typography>
                      }
                    />
                  </Tabs>
                  <Box sx={{ p: 2 }}>
                    <TabPanel value={selectedTab} index={0}>
                      <Box>
                        <Typography>Campaign name</Typography>
                        <TextField sx={{ mt: 1 }} size="small" fullWidth />
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography>Text</Typography>

                        <TextField
                          sx={{ mt: 1 }}
                          fullWidth
                          multiline
                          rows={4}
                          placeholder0="message "
                        />
                      </Box>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1}>
                      <Box>
                        <Typography>Campaign name</Typography>
                        <TextField sx={{ mt: 1 }} size="small" fullWidth />
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography>Text</Typography>

                        <TextField
                          fullWidth
                          sx={{ mt: 1 }}
                          multiline
                          rows={4}
                          placeholder="message "
                        />
                      </Box>
                      <Box mt={2}>
                        <Typography>Paste Link</Typography>
                        <TextField sx={{ mt: 1 }} size="small" fullWidth />
                      </Box>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2}>
                      <Box sx={{ display: "flex" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            borderRadius: 0,
                            border: "1px solid #eee",
                            backgroundColor: "#eee",
                            width: "25%",
                          }}
                        >
                          Paste URL
                        </Button>

                        <TextField
                          sx={{ width: "25%" }}
                          size="small"
                          id="outlined-basic"
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          sx={{
                            borderRadius: 0,
                            width: "50%",
                            backgroundColor: "#eee",
                          }}
                        >
                          lg Media Manual
                        </Button>
                      </Box>
                      <Box mt={1}>               
                        <Button
                          sx={{
                            borderRadius: 1,
                            color: "#fff",
                          }}
                          size="small"
                          variant="contained"
                          color="secondary"
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload Image
                        </Button>
                      </Box>
                      <Box mt={2}>
                        <Box>
                          <Typography>Campaign name</Typography>
                          <TextField sx={{ mt: 1 }} size="small" fullWidth />
                        </Box>
                        <Box sx={{ mt: 2 }}>
                          <Typography>Text</Typography>

                          <TextField
                            sx={{ mt: 1 }}
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="message "
                          />
                        </Box>
                      </Box>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={3}>
                      <Box sx={{ display: "flex" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            borderRadius: 0,
                            border: "1px solid #eee",
                            backgroundColor: "#eee",
                          }}
                        >
                          PasteURL
                        </Button>

                        <TextField fullWidth size="small" variant="outlined" />
                      </Box>
                      <Box mt={1}>
                        <Button
                          sx={{
                            borderRadius: 1,
                            color: "#fff",
                          }}
                          size="small"
                          variant="contained"
                          color="secondary"
                          startIcon={<CloudUploadIcon />}
                        >
                          Upload Video
                        </Button>
                      </Box>
                      <Box mt={2}>
                        <Box>
                          <Typography>Campaign name</Typography>
                          <TextField sx={{ mt: 1 }} size="small" fullWidth />
                        </Box>

                        <Box sx={{ mt: 2 }}>
                          <Typography>Text</Typography>

                          <TextField
                            sx={{ mt: 1 }}
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="message"
                          />
                        </Box>
                      </Box>
                    </TabPanel>
                    <Box mt={2}>
                      <Typography>Posting time</Typography>

                      <FormControlLabel
                        control={
                          <Switch
                            checked={isSwitchOn}
                            onChange={handleSwitchChange}
                          />
                        }
                        label="Post now"
                      />
                      {isSwitchOn && (
                        <Box>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <Box sx={{ width: "50%" }}>
                              <Typography>Schedule time</Typography>
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                size="small"
                              />
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <Typography> Time Zone</Typography>

                              <FormControl sx={{ width: "100%" }}>
                                <Select
                                  size="small"
                                  multiple
                                  displayEmpty
                                  value={personName}
                                  onChange={handleChange}
                                  input={<OutlinedInput />}
                                  renderValue={(selected) => {
                                    if (selected.length === 0) {
                                      return <p>Please select</p>;
                                    }
                                    return selected.join(", ");
                                  }}
                                  MenuProps={MenuProps}
                                  inputProps={{ "aria-label": "Without label" }}
                                >
                                  <MenuItem disabled value="">
                                    <p>Please select </p>
                                  </MenuItem>
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
                          </Box>
                          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            <Box sx={{ width: "50%" }}>
                              <Typography>Repost this post</Typography>
                              <FormControl
                                sx={{ width: "100%" }}
                                size="small"
                                variant="outlined"
                                type="number"
                              >
                                <OutlinedInput
                                  type="number"
                                  id="outlined-adornment-weight"
                                  endAdornment={
                                    <InputAdornment position="end">
                                      Times
                                    </InputAdornment>
                                  }
                                  aria-describedby="outlined-weight-helper-text"
                                  inputProps={{
                                    "aria-label": "weight",
                                  }}
                                />
                              </FormControl>
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <Typography>Time interval</Typography>
                              <FormControl sx={{ width: "100%" }}>
                                <Select
                                  size="small"
                                  multiple
                                  displayEmpty
                                  value={personName}
                                  onChange={handleChange}
                                  input={<OutlinedInput />}
                                  renderValue={(selected) => {
                                    if (selected.length === 0) {
                                      return <p>Please select</p>;
                                    }
                                    return selected.join(", ");
                                  }}
                                  MenuProps={MenuProps}
                                  inputProps={{ "aria-label": "Without label" }}
                                >
                                  <MenuItem disabled value="">
                                    <p>Please select </p>
                                  </MenuItem>
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
                          </Box>
                        </Box>
                      )}
                    </Box>

                    <Box mt={2} >
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<TelegramIcon />}
                      >
                        Submit
                      </Button>
                    

                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3}>
              <Paper square sx={{ p: 1 }}>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Switch />
                  <Typography> Instagram</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
