import { Box, ListItem, ListItemText, Typography, List } from "@mui/material";
import bizedge from "../assets/bizedge.png";
import button from "../assets/button.png";

function Footer() {
  return (
    <Box
      sx={{
        height: { xs: "100%", md: "380px" },
        width: { xs: "100%", md: "100%" },
        marginTop: "40px",
        backgroundColor: "#FAFAFA",
      }}
    >
      <Box sx={{ maxWidth: "900px", margin: "auto", paddingBlock: {xs:"0px",md:"40px"} }}>
        <Box sx={{ display:{xs:"none",md:"flex"}, gap: "180px" }}>
          <Box>
            <img className="bizedge" src={bizedge} alt="bizedge"></img>
            <Box>
              <img className="button" src={button} alt="button"></img>
            </Box>
          </Box>

          <Box
            sx={{
              display: {xs:"none",md:"flex"},
              justifyContent: "space-between",
              width: "550px",
              
            }}
          >
            <Typography sx={{ fontFamily: "blacksansbold", fontSize: "18px" }}>
              Home
              <List
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "blacksansregular",
                  lineHeight: "30px",
                  fontSize: "15px",
                  opacity: ".7",
                }}
              >
                <List>Company</List>
                <List>product</List>
                <List>pricing</List>
                <List>support</List>
              </List>
            </Typography>
            <Typography sx={{fontFamily:"blacksansbold",fontSize:"18px"}}>Apps
              <List sx={{textTransform:"capitalize",fontFamily:"blacksansregular",fontSize:"15px",opacity:".7",lineHeight:"30px"}}>
                 <List>People management</List>
                 <List>time & attendance</List>
                 <List>payroll</List>
                 <List>asset management</List>
                 <List>vehicle management</List>
                 <List>document generation</List>
 

              </List>

            </Typography>

            <Typography sx={{fontFamily:"blacksansbold",fontSize:"18px"}}>Contact
              <List sx={{fontFamily:"blacksansregular",fontSize:"15px"}}>
                 <List>Get in Touch</List>
                 <List>Book a Demo</List>

              </List>
            </Typography>
          </Box>
        </Box>
           
            <Box sx={{display:{xs:"block",md:"none",padding:"40px"}}}>
   
                <Box>
                  
                  <img src={bizedge} alt="bizedge"></img>
                  
                   <Box sx={{display:"flex",justifyContent:"space-between"}}>

                    <Typography sx={{fontFamily:"blacksansblack",fontSize:"18px",marginTop:"20px"}}>Home
                     <List sx={{fontFamily:"blacksansregular",textTransform:"capitalize",fontSize:"15px"}}>
                      <List>pricing</List>
                      <List>term of service</List>
                      <List>privacy policy</List>


                     </List>

                    </Typography>

                    <Typography sx={{fontFamily:"blacksansblack",fontSize:"18px",marginTop:"20px"}}>Apps

                     <List sx={{fontFamily:"blacksansregular",textTransform:"capitalize",fontSize:"15px"}}>

                      <List>human resource</List>
                      <List>task app</List>
                      <List >time & attendance</List>
                      <List>assets & vehicle</List>
                      <List>payroll</List>
                      <List>accounting</List>


                     </List>


                    </Typography>

                   </Box>

                   <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>

                    <Typography sx={{fontFamily:"blacksansbold",fontSize:"18px"}}>Resources
  
                     <List sx={{fontFamily:"blacksansregular",fontSize:"15px"}}>
 
                      <List>Help Center</List>
                      <List>FAQS</List>
                      <List>Insights</List>


                     </List>


                    </Typography>

                    <Typography sx={{fontFamily:"blacksansbold",fontSize:"18px"}}>Contact

                      <List sx={{fontFamily:"blacksansregular"}}>

                       <List>Get in touch</List>
                       <List>Request a Demo</List>


                      </List>


                    </Typography>


                   </Box>
                    

                  </Box>  


            </Box>

      </Box>
    </Box>
  );
}

export default Footer;
