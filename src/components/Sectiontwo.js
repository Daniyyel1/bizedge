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
 
    



        <Typography
          sx={{
            width: "250px",
            marginTop: {xs:"20px",md:"70px"},
            fontFamily: "blacksansregular",
            fontWeight: "600",
            marginLeft: {xs:"50px",md:"50px"},
            fontSize: "9px",
            color: "orange",
            textAlign:{xs:"center",md:"inherit"},
            margin:{xs:"",md:""},
            marginBottom:{xs:"100px",md:"0px"}
          }}
        >
          Time & Attendance
          <Typography
            sx={{
              color: "#000",
              marginTop: {xs:"10px",md:"10px"},
              width: {xs:"300px",md:"200px"},
              fontFamily: "blacksansregular",
              fontWeight: "600",
              fontSize: {xs:"22px",md:"23px"},
              textAlign:{xs:"center",md:"inherit"},
              margin:{xs:"",md:"0px"},
              marginLeft:{xs:"-20px",md:""},
              lineHeight:{xs:"28px",md:"inherit"}
            }}
          >
            Track employee attendance easily
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              marginTop: {xs:"10px",md:"30px"},
              width: {xs:"290px",md:"240px"},
              lineHeight: {xs:"20px",md:"30px"},
              color: "#000",
              fontSize: "13px",
              textAlign:{xs:"center",md:"inherit"},
              marginLeft:{xs:"-10px",md:"0px"}
            }}
          >
            Set up an efficient clock in & clock out tool for your employees,
            whether they work onsite or remotely.{" "}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default Sectiontwo;
