import {
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  FormControlLabel,
  Switch,
} from "@mui/material";
import * as React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { TouchApp } from "@mui/icons-material";
import { Divider } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import FacebookIcon from "@material-ui/icons/Facebook";
export default function CtaPostMain() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  const handleGoBack = () => {
    window.history.back();
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
              sx={{
                color: "#000fff",
                fontSize: "16px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TouchApp sx={{ fontSize: "20px", marginRight: "8px" }} />
              Add cta post
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "#000fff" }}>Facebook Poster/</Typography>
            <Typography sx={{ color: "#000fff" }}>cta post/</Typography>
            <Typography> add cta post</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper sx={{ p: 2, borderRadius: 0 }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#000fff",
                  }}
                >
                  <FormatListBulletedIcon
                    sx={{ fontSize: "20px", marginRight: "8px" }}
                  />
                  Campaign Form
                </Typography>
                <Divider />
                <Box mt={2}>
                  <Box>
                    <Typography>Campaign name</Typography>
                    <TextField sx={{ mt: 1 }} size="small" fullWidth />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography>Message</Typography>

                    <TextField
                      sx={{ mt: 1 }}
                      fullWidth
                      multiline
                      rows={4}
                      placeholder0="write your  message  here"
                    />
                  </Box>
                  <Box mt={2}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Box sx={{ width: "50%" }}>
                        <Typography>Paste link</Typography>
                        <FormControl size="small" sx={{ width: "100%", mt: 1 }}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </Box>
                      <Box sx={{ width: "50%" }}>
                        <Typography>Cta button type</Typography>

                        <FormControl size="small" sx={{ width: "100%", mt: 1 }}>
                          <Select>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                      <Box sx={{ width: "50%" }}>
                        <Typography>Paste to pages</Typography>
                        <FormControl
                          sx={{ width: "100%", mt: 1 }}
                          size="small"
                          variant="outlined"
                          type="number"
                        >
                          <Select>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{ width: "50%" }}>
                        <Typography>Auto reply template</Typography>

                        <FormControl size="small" sx={{ width: "100%", mt: 1 }}>
                          <Select>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>

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
                      <Box mt={2}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Box sx={{ width: "50%" }}>
                            <Typography>Schedule time</Typography>
                            <FormControl size="small" sx={{ width: "100%" }}>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                  components={[
                                    "DateTimePicker",
                                    "MobileDateTimePicker",
                                    "DesktopDateTimePicker",
                                    "StaticDateTimePicker",
                                  ]}
                                >
                                  <DemoItem>
                                    <MobileDateTimePicker
                                      size="small"
                                      defaultValue={dayjs("2022-04-17T15:30")}
                                    />
                                  </DemoItem>
                                </DemoContainer>
                              </LocalizationProvider>
                            </FormControl>
                          </Box>
                          <Box sx={{ width: "50%" }}>
                            <Typography>Time zone</Typography>

                            <FormControl
                              size="small"
                              sx={{ width: "100%", mt: 1 }}
                            >
                              <Select>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                          <Box sx={{ width: "50%" }}>
                            <Typography>Repost this post</Typography>
                            <FormControl
                              sx={{ width: "100%", mt: 1 }}
                              size="small"
                              variant="outlined"
                              type="number"
                            >
                              <Select>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <Box sx={{ width: "50%" }}>
                            <Typography>Time interval</Typography>
                            <FormControl
                              size="small"
                              sx={{ width: "100%", mt: 1 }}
                            >
                              <Select>
                                <MenuItem value="option1">Option 1</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                  <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<TelegramIcon />}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleGoBack}
                    >
                      cancle
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{ p: 2, borderRadius: 0 }}>
                <Box>
                  <Typography>
                    <FacebookIcon
                      fontSize="small"
                      style={{ color: "#3b5998" }}
                    />
                    Preview
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
