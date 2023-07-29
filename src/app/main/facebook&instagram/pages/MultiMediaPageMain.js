import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Avatar } from "@mui/material";

const data = [
  { id: 1, title: "Card 1", content: "This is the content of Card 1" },
  { id: 2, title: "Card 2", content: "This is the content of Card 2" },
  { id: 3, title: "Card 3", content: "This is the content of Card 3" },
  { id: 4, title: "Card 4", content: "This is the content of Card 4" },
  { id: 5, title: "Card 5", content: "This is the content of Card 5" },
  { id: 6, title: "Card 6", content: "This is the content of Card 6" },
];

export default function MultiMediaPageMain() {
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
                  sx={{ width: 50, height: 50, marginBottom: "8px" }}
                />
              </Box>
              <Box>
                <Typography variant="h5">User Name</Typography>
                <Typography variant="body1">Email@example.com</Typography>
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
          {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
              <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
