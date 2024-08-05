import { Box, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import lastc from "../assets/lastc.png";
import top from "../assets/top.png";
import { Margin, Padding } from "@mui/icons-material";

function Sectiontwo() {
  return (
    <Box>
      <Box
        sx={{
          width: {xs:"370px",md:"900px"},
          borderRadius: "20px",
          height: {xs:"600px",md:"380px"},
          backgroundColor: "#FEF6E6",
          margin: {xs:"auto",md:"auto"},
          display: "flex",
          marginTop: {xs:"40px",md:"120px"},
          gap:"40px",
          flexDirection:{xs:"column-reverse",md:"inherit"}

        }}
      >
          
            <img className="img" src={top}   alt="top"></img>


              <img className="last" src={lastc} alt="lastc"></img>
 
    

          <Box>

        <Typography
          sx={{
            width: "250px",
            marginTop: {xs:"20px",md:"30px"},
            fontFamily: "blacksansregular",
            fontWeight: "600",
            marginLeft: {xs:"50px",md:"5px"},
            fontSize: "11px",
            color: "orange",
            textAlign:{xs:"center",md:"inherit"},
            margin:{xs:"",md:""},
            marginBottom:{xs:"15px",md:"inherit"},
            paddingBlock:{xs:"inherit",md:"20px"},
            opacity:".7"
          }}
        >
          Time & Attendance
          </Typography>

          <Typography
            sx={{
              color: "#000",
              marginTop: {xs:"inherit",md:"20px"},
              width: {xs:"300px",md:"200px"},
              fontFamily: "blacksansregular",
              fontWeight: "800",
              fontSize: {xs:"26px",md:"23px"},
              textAlign:{xs:"center",md:"inherit"},
              margin:{xs:"auto",md:"0px"},
              lineHeight:{xs:"28px",md:"inherit"},
              marginBottom:{xs:"20px",md:"inherit"}
            
            }}
          >
            Track employee attendance easily
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              marginTop: {xs:"10px",md:"30px"},
              width: {xs:"290px",md:"270px"},
              lineHeight: {xs:"20px",md:"30px"},
              color: "#000",
              fontSize: "13px",
              textAlign:{xs:"center",md:"inherit"},
              marginLeft:{xs:"-10px",md:"0px"},
              fontFamily:"blacksansregular",
              opacity:".7",
              margin:{xs:"auto",md:""},
              marginBottom:{xs:"70px",md:"inherit"}
            }}
          >
            Set up an efficient clock in & clock out tool for your employees,
            whether they work onsite or remotely.
          </Typography>
        
        </Box>

      </Box>
    </Box>
  );
}

export default Sectiontwo;
