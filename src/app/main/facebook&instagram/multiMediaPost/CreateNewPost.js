import {
  Typography,
  Box,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import useState from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LinkIcon from "@mui/icons-material/Link";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import VideocamIcon from "@mui/icons-material/Videocam";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

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

export default function CreateNewPost() {
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
        <Box sx={{ border: "1px solid gray ", p: 2 }}>
          <Grid container>
            <Grid item xs={3}>
              <Paper square>hii</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper square sx={{ border: "1px solid gray ", p: 1 }}>
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
                  <Box sx={{ border: "1px solid gray ", p: 2 }}>
                    <TabPanel value={selectedTab} index={0}>
                      <Box>
                        <Typography>Campaign name</Typography>
                        <TextField sx={{ mt: 1 }} size="small" fullWidth />
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography>Text</Typography>

                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          defaultValue="Message "
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
                          multiline
                          rows={4}
                          defaultValue="Message "
                        />
                      </Box>
                      <Box mt={2}>
                        <Typography>Paste Link</Typography>
                        <TextField sx={{ mt: 1 }} size="small" fullWidth />
                      </Box>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2}>
                      Content of Tab 3
                    </TabPanel>
                    <TabPanel value={selectedTab} index={3}>
                      Content of Tab 4
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
                    <Box mt={2}>
                      <Button
                        sx={{ borderRadius: 0 }}
                        variant="contained"
                        color="secondary"
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper square>kaise ho</Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
