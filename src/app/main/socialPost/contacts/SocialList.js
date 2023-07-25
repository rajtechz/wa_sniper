import * as React from "react";
import _ from "@lodash";
import { Box } from "@mui/system";
import Button from "@material-ui/core/Button";
import TelegramIcon from "@mui/icons-material/Telegram";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Paper, Typography } from "@mui/material";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import TheatersIcon from "@mui/icons-material/Theaters";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ShareIcon from "@mui/icons-material/Share";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DescriptionIcon from "@mui/icons-material/Description";
import PanoramaIcon from "@mui/icons-material/Panorama";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { makeStyles } from "@material-ui/core/styles";
import HtmlIcon from "@mui/icons-material/Html";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";
const cardStyles = {
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "250px", // Set a fixed height for the card
  width: "100%", // Set a fixed width for the card
  cursor: "pointer",
  textDecoration: "none",
};

// Style for the content inside the cards
const cardContentStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    background: "transparent",
    border: "1px solid #000fff",
    borderRadius: "4px", // Optional: Add rounded corners if desired
    padding: "8px 16px", // Optional: Add padding if needed
    color: "#000fff", // Optional: Change text color
    margin: "4px", // Optional: Add margin between buttons
    transition: "background-color 0.3s", // Add a smooth transition effect
    "&:hover": {
      background: "#000fff",
      border: "none", // Remove border on hover
      color: "#fff",
    },
  },
}));

function SocialList() {
  const classes = useStyles();
  const navigate = useNavigate();

  const fbInstaPage = () => {
    navigate("/socialPost/contactGroups/FacebookAndInstaPost");
  };
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#000fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CheckBoxOutlineBlankIcon sx={{ marginRight: "5px" }} />
          Facebook & Instagram poster
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>
                <Box sx={{ minWidth: 275 }}>
                  <Card
                    variant="outlined"
                    sx={cardStyles}
                    onClick={fbInstaPage}
                  >
                    <Box>
                      <CardContent sx={cardContentStyles}>
                        <TelegramIcon sx={{ fontSize: "65px" }} />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000fff",
                            mb: 3,

                            fontWeight: "bold",
                          }}
                        >
                          Multimedia Post
                        </Typography>
                        <Typography sx={{ fontSize: "18px", mb: 3 }}>
                          Post, Text, Link, Image, video on Facebook & Instagram
                          automatically
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>
                <Card variant="outlined" sx={cardStyles}>
                  <CardContent sx={cardContentStyles}>
                    <PanToolAltIcon sx={{ fontSize: "65px" }} />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#000fff",
                        mb: 3,
                        fontWeight: "bold",
                      }}
                    >
                      Cta Post
                    </Typography>
                    <Typography sx={{ fontSize: "18px", mb: 3 }}>
                      Post, call to action on Facebook automatically
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>
                <Card variant="outlined" sx={cardStyles}>
                  <CardContent sx={cardContentStyles}>
                    <TheatersIcon sx={{ fontSize: "65px" }} />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#000fff",
                        mb: 3,
                        fontWeight: "bold",
                      }}
                    >
                      Carousel/Video post
                    </Typography>
                    <Typography sx={{ fontSize: "18px", mb: 3 }}>
                      Post, carousel videos on Facebook automatically
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper>
                <Card variant="outlined" sx={cardStyles}>
                  <CardContent sx={cardContentStyles}>
                    <LaptopChromebookIcon sx={{ fontSize: "65px" }} />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#000fff",
                        mb: 3,
                        fontWeight: "bold",
                      }}
                    >
                      Facebook Livestreaming
                    </Typography>
                    <Typography sx={{ fontSize: "18px", mb: 3 }}>
                      Go live with the pre recorded video on Facebook page/group
                      automatically
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#000fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ShareIcon sx={{ marginRight: "5px" }} />
            Social Poster
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined" sx={cardStyles}>
                      <CardContent sx={cardContentStyles}>
                        <DescriptionIcon sx={{ fontSize: "65px" }} />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000fff",
                            mb: 3,
                            fontWeight: "bold",
                          }}
                        >
                          Text Post
                        </Typography>
                        <Typography sx={{ fontSize: "18px", mb: 3 }}>
                          Post text automatically on multiple social media
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Card variant="outlined" sx={cardStyles}>
                    <CardContent sx={cardContentStyles}>
                      <PanoramaIcon sx={{ fontSize: "65px" }} />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#000fff",
                          mb: 3,
                          fontWeight: "bold",
                        }}
                      >
                        Image Post
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: 3 }}>
                        Post,image automatically on multiple social media
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Card variant="outlined" sx={cardStyles}>
                    <CardContent sx={cardContentStyles}>
                      <VideocamIcon sx={{ fontSize: "65px" }} />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#000fff",
                          mb: 3,
                          fontWeight: "bold",
                        }}
                      >
                        Video post
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: 3 }}>
                        Post, videos automatically on multiple socialmedia
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Card variant="outlined" sx={cardStyles}>
                    <CardContent sx={cardContentStyles}>
                      <AddLinkIcon sx={{ fontSize: "65px" }} />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#000fff",
                          mb: 3,
                          fontWeight: "bold",
                        }}
                      >
                        Link Post
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: 3 }}>
                        Post link automatically on multiple social media
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined" sx={cardStyles}>
                      <CardContent sx={cardContentStyles}>
                        <HtmlIcon sx={{ fontSize: "65px" }} />
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#000fff",
                            mb: 3,
                            fontWeight: "bold",
                          }}
                        >
                          HTML Post
                        </Typography>
                        <Typography sx={{ fontSize: "18px", mb: 3 }}>
                          Post, HTML contents automatically on multiple social
                          media
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <Card variant="outlined" sx={cardStyles}>
                    <CardContent sx={cardContentStyles}>
                      <CalendarMonthIcon sx={{ fontSize: "65px" }} />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#000fff",
                          mb: 3,
                          fontWeight: "bold",
                        }}
                      >
                        Bulk Post Planner
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: 3 }}>
                        Uploade text, image, link, posts viacsv file
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Paper>
                  <Card variant="outlined" sx={cardStyles}>
                    <CardContent sx={cardContentStyles}>
                      <RssFeedIcon sx={{ fontSize: "65px" }} />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#000fff",
                          mb: 3,
                          fontWeight: "bold",
                        }}
                      >
                        Auto Post
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: 3 }}>
                        Post,rss feed posts automatically on multiple social
                        media
                      </Typography>
                      <Box>
                        <div className={classes.container}>
                          <Button className={classes.button}>
                            <Box sx={{ display: "flex", gap: "10px" }}>
                              <RssFeedIcon />

                              <Typography
                                sx={{
                                  textTransform: "capitalize",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                Rss feed
                              </Typography>
                              <KeyboardArrowRightIcon />
                            </Box>
                          </Button>
                          <Button className={classes.button}>
                            <Box sx={{ display: "flex", gap: "10px" }}>
                              <YouTubeIcon />

                              <Typography
                                sx={{
                                  textTransform: "capitalize",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                Youtube Video
                              </Typography>
                              <KeyboardArrowRightIcon />
                            </Box>
                          </Button>
                        </div>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SocialList;
