import { Box, Typography } from "@mui/material";
import bizedge from "../assets/bizedge.png";
import button from "../assets/button.png"

function Footer() {
  return (
    <Box>
      <Box
        sx={{
          height: {xs:"100%",md:"380px"},
          width: {xs:"100%",md:"100%"},
          marginTop: "40px",
          backgroundColor: "#FAFAFA",
          display:"flex"
        }}
      >
        <Box
          sx={{
            maxWidth: {xs:"300px",md:"900px"},
            margin: {xs:"0px",md:"auto"},
            display: "flex",
            justifyContent: {xs:"center",md:"space-between"},
            flexDirection:{xs:"column",md:"row"},
            padding:{xs:"16px",md:"0px"},
            paddingBlock: {xs:"50px",md:"40px"},
          }}
        >
          <img className="very" src={bizedge} alt="bizedge"></img>

          <img className="button" src={button} alt="button"></img>
          
          <Box
            sx={{
              display: "flex",
              justifyContent: {xs:"center",md:"space-between"},
              gap: {xs:"0px",md:"150px"},
              flexDirection:{xs:"column",md:"row"},
            }}
          >
            <Box
              sx={{
                fontSize: "20px",
                fontFamily: "blacksansblack",
                opacity: ".7",
                lineHeight: {xs:"30px",md:"50px"},
              }}
            >
              Home
              <Typography sx={{ lineHeight: "40px" }}>Company</Typography>
              <Typography sx={{ lineHeight: "40px" }}>Product</Typography>
              <Typography sx={{ lineHeight: "40px" }}>Pricing</Typography>
              <Typography sx={{ lineHeight: "40px" }}>Support</Typography>
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                fontFamily: "blacksansblack",
                opacity: ".7",
                lineHeight: "50px",
              }}
            >
              Apps
              <Typography sx={{ lineHeight: "40px" }}>
                People Management
              </Typography>
              <Typography sx={{ lineHeight: "40px" }}>
                Time & Attendanace
              </Typography>
              <Typography sx={{ lineHeight: "40px" }}>Payroll</Typography>
              <Typography sx={{ lineHeight: "40px" }}>
                Asset Management
              </Typography>
              <Typography sx={{ lineHeight: "40px" }}>
                Vehicle Management
              </Typography>
              <Typography sx={{ lineHeight: "40px" }}>
                Document Generation
              </Typography>
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                fontFamily: "blacksansblack",
                opacity: ".7",
                lineHeight: "50px",
              }}
            >
              Contacts
              <Typography sx={{ lineHeight: "40px" }}> Get In Touch</Typography>
              <Typography sx={{ lineHeight: "40px" }}>Book A Demo</Typography>
            </Box>
          </Box>
          
        </Box>
        
      </Box>
      
    </Box>
  );
}

export default Footer;
