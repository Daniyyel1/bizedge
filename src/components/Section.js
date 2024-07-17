import { Box, Container, ImageList, ImageListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Component from "react";
import people from "../assets/people.png";

function Section() {
  return (
    <Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "blacksansbold",
            textAlign: "center",
            fontSize: { xs: "22px", md: "35px" },
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          our unique features
        </Typography>
        <Typography
          sx={{
            fontFamily: "blacksansregular",
            fontSize: { xs: "15px", md: "20px" },
            marginTop: "20px",
            textAlign: "center",
            width: { xs: "350px", md: "540px" },
            lineHeight: { xs: "26px", md: "" },
            margin: "auto",
            marginTop: { xs: "10px", md: "" },
            opacity: { xs: ".7", md: ".7" },
          }}
        >
          Experience the ease of employee onboarding, managing time- off,
          benefits, and more.
        </Typography>
        <Box
          sx={{
            width: { xs: "370px", md: "900px" },
            height: { xs: "650px", md: "380px" },
            display: "flex",
            borderRadius: "20px",
            backgroundColor: "#EBEFFA",
            margin: "auto",
            marginTop: {xs: "3rem",md:"30px"},
            flexDirection:{xs:"column",md:"row"}
          }}
        >
          <Container sx={{ paddingBlock: { xs: "20px", md: "80px" } }}>
            <Typography
              sx={{
                textTransform: "capitalize",
                fontFamily: "blacksanblack",
                fontWeight: {xs:"800",md:"540"},
                color: "#1E387B",
                textAlign:{xs:"center",md:"inherit"},
                width:{xs:"340px"}
              }}
            >
              people analytics, time & attendance, core HR
            </Typography>
            <Typography sx={{

            fontFamily:"blacksansbold",
            fontSize:{xs:"28px",md:"30px"},
            fontWeight:"550",
            width:{xs:"300px",md:"400px"},
            marginTop:{xs:"20px",md:"40px"},
            textAlign:{xs:"center",md:"inherit"},
            lineHeight:{xs:"35px"},
            margin:{xs:"auto",md:"0px"},
            paddingBlock:"10px"
            

            }}
              variant="h6"
              
            >
              Modern people management is here.
            </Typography>
            <Typography
              sx={{
                fontFamily: "blacksansregular",
                width: {xs:"330px",md:"350px"},
                fontSize: {xs:"15px",md:"18px"},
                marginTop: "20px",
                textAlign:{xs:"center",md:"inherit"}
              }}
            >
              
              Experience the ease of creating time-off benefits, and onboarding
              and offboarding.
            </Typography>
          </Container>
          <Container
            sx={{
              width: {xs:"340px",md:"600px"},
              height: {xs:"360px",md:"360px"},
              marginTop: "10px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              position: "relative",
              left: {xs:"10px",md:"25px"},
              margin:{xs:"auto",md:"0px"}
            }}
          >
            
           <ImageList>
           
             <ImageListItem sx={{
              width:{xs:"350px",md:"350px"},
              marginTop:{xs:"30px",md:"50px"},
              left:{xs:"-20px",md:"0px"}
             
             }}>
             <img
              src={people}
              alt="people"
            ></img>
             
             </ImageListItem>
           
           </ImageList>

          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Section;
