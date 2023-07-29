import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button } from '@mui/material';
export default function MultiMediaPageHeader() {
  return (
    <>
      <Box sx={{ width: "100%", p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FacebookIcon
            sx={{ fontSize: "24px", color: "#1877F2", marginRight: "8px" }}
          />
          <Typography sx={{fontWeight:"bold" , color:"#000fff"}}>Connect Facebook & Instagram</Typography>
        </Box>

        <Box
          sx={{
            justifyContent: "flex-end",
            display: "flex",
            marginLeft: "auto",
          }}
        >
           <Button
              className=""
              variant="contained"
              color="secondary"
              startIcon={ <FacebookIcon
                sx={{ fontSize: "24px", color: "#fff", marginRight: "8px" }}
              />}
            >
              Log in with facebbok
            </Button>
        </Box>  
      </Box>
    </>
  );
}
