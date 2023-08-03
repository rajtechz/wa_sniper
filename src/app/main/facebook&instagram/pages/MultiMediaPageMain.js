import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Avatar } from "@mui/material";
import axios from "axios";
const URL = "http://127.0.0.1:5000/api/auth/getAllPages";
export default function MultiMediaPageMain() {
  const [facebookUsersData, setFacebookUsersData] = useState("");
  const [pagesData, setPagesData] = useState([]);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("authorization");

    if (token) {
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };

      // Make the GET request
      axios
        .get(URL, config)
        .then((response) => {
          console.log(response);
          setPagesData(response?.data);

          setFacebookUsersData(response?.data?.facebookUsers);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);
  console.log(pagesData?.pages);

 
  return (
    <>
      <Box p={2}>
        <Box
          sx={{
            display: "flex",
            // background: "red",
            justifyContent: "space-between",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Avatar
                  alt="Profile Picture"
                  src={facebookUsersData?.picture?.url}
                  sx={{ width: 50, height: 50, marginBottom: "8px" }}
                />
              </Box>
              <Box>
                <Typography variant="h5">{facebookUsersData?.name}</Typography>
                <Typography variant="body1">
                  {facebookUsersData?.email}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <TextField
              size="small"
              id="search"
              placeholder="Search..."
              fullWidth
            />
          </Box>
        </Box>
        <Grid container spacing={3} mt={3}>
            <Grid  item xs={12} sm={6} md={4} lg={4}>
              <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{width :"50%"}} >
                      
                      <Typography gutterBottom variant="h5" component="div">
                        {pagesData?.pages?.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        hello
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Box>
    </>
  );
}
