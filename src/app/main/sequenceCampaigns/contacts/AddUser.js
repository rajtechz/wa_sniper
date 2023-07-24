import { Typography, Button, Divider, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tab, Tabs } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
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
  const [personName, setPersonName] = useState([]);
  const [campaign, setCampaign] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate(-1);
  };
  const handleCampaignChange = (event) => {
    setCampaign(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [age, setAge] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton>
            <AddIcon />
            <Typography color="#0000FF">Add user</Typography>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>Add user/</Typography>
          <Typography>Campaigning List/</Typography>
          <Typography>Add Sequence</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            p: 2,
            border: "1px solid #ccc",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
            width: "100%",
          }}
        >
          <Box>
            <TextField
              fullWidth
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Campaign Name"
            />
          </Box>
          <Typography> Sequence Type </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="contained">Enroll</Button>
            <Button variant="contained">SMS</Button>
          </Box>
          <Box>
            <TextField
              fullWidth
              helperText=" "
              id="demo-helper-text-aligned-no-helper"
              label="Campaign Name"
              select
              value={campaign}
              onChange={handleCampaignChange}
            >
              <MenuItem value="campaign1">Campaign 1</MenuItem>
              <MenuItem value="campaign2">Campaign 2</MenuItem>
              <MenuItem value="campaign3">Campaign 3</MenuItem>
            </TextField>
          </Box>
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
              <Typography>Sequence Time</Typography>
            </Box>
            <Divider
              sx={{ backgroundColor: "black", height: "3px", marginTop: 1 }}
            />

            <Box sx={{ marginTop: 1 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "blue", 
                  },
                }}
              >
                <Tab label="24 hour" />
                <Tab label="daily" />
              </Tabs>
              {activeTab === 0 && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: 2,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Box
                        sx={{
                          padding: 1,
                          color: "#fff",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "100%",
                          background: "#000fff",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 20, marginRight: 1 }} />{" "}
                        Click Me
                      </Box>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <TextField
                        fullWidth
                        helperText=" "
                        id="demo-helper-text-aligned-no-helper"
                        label="Campaign Name"
                        select
                        value={campaign}
                        onChange={handleCampaignChange}
                      >
                        <MenuItem value="campaign1">Campaign 1</MenuItem>
                        <MenuItem value="campaign2">Campaign 2</MenuItem>
                        <MenuItem value="campaign3">Campaign 3</MenuItem>
                      </TextField>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                            color: "#000fff",
                            border: "2px solid #000fff", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "space-between",
                            padding: "8px", 
                          }}
                        >
                          <AddIcon sx={{ marginRight: "8px" }} /> Add More Hour{" "}
                        </Button>

                        <Button
                          variant="contained"
                          color="secondary"
                          style={{
                            borderRadius: 5,
                            backgroundColor: "gray",
                            alignItems: "center", 
                            padding: "8px", 
                          }}>
                          <CloseIcon sx={{ marginRight: "8px" }} /> remove last
                          hour
                        </Button>
                      </Box>
                    </Box>
                    <Box sx={{ width: "20%" }}>
                      <Box sx={{ width: "100%", paddingTop: 1 }}>
                        <CachedIcon size={40} color="secondary" thickness={4} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
              {activeTab === 1 && (
                <Box>
                  <Typography>This is the content of Tab 2</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box sx={{ justifyContent: "space-between", display: "flex", pt: 3 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              backgroundColor: "#000fff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#000fff",
              },
            }}
          >
            Create Campaign
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{
              borderRadius: 5,
              backgroundColor: "white",
              color: "black",
              border: "1px solid gray",
            }}
            onClick={handleCancelClick}
          >
            Back
          </Button>
        </Box>
      </Box>
    </>
  );
}
