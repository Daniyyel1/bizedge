import { Box, Typography } from "@mui/material";
import phone from "../assets/phone.png";

function SectionFour() {
  return (
    <Box>
      <Box
        sx={{
          height: {xs:"550px",md:"380px"},
          width: {xs:"370px",md:"900px"},
          margin: {xs:"auto",md:"auto"},
          marginTop: {xs:"60px",md:"120px"},
          borderRadius: "20px",
          backgroundColor: "#EBEFFA",
          display: "flex",
          // justifyContent: "space-between",
          flexDirection:{xs:"column",md:"row"},
          gap:"30px"
        }}
      >
        <Box sx={{ padding:{xs:"5px",md:"35px"}}}>
          <Typography
            sx={{

              marginTop: {xs:"20px",md:"90px"},
              color: "#4069D0",
              fontFamily: "blacksansregular",
              fontWeight: "600",
              fontSize: "12px",
              textAlign:{xs:"center",md:"inherit"}
            }}
          >
            MyEdge (employee self-service)
          </Typography>
          <Typography
            sx={{
              margin:{xs:"auto",md:"0px"},
              marginTop: {xs:"10px",md:"10px"},
              fontFamily: "blacksansregular",
              fontSize: {xs:"28px",md:"25px"},
              fontWeight: "600",
              width:{xs:"300px",md:"inherit"},
              textAlign:{xs:"center",md:"inherit"},
              lineHeight:{xs:"35px",md:"inherit"}
            }}
          >
            Get the best out of Work-life
          </Typography>
          <Typography
            sx={{
              margin:{xs:"auto",md:"0px"} ,
              marginTop: {xs:"8px",md:"30px"},
              fontSize: "15px",
              width: {xs:"330px",md:"400px"},
              lineHeight: "25px",
              opacity: ".8",
              textAlign:{xs:"center",md:"inherit"},
              fontFamily:"blacksansregular"
            }}
          >
            MyEdge app has features that manage employee information that helps
            achieve a stress-free and personalised self-service experience.
          </Typography>
        </Box>
        <img className="phone"  src={phone} alt="phone"></img>
      </Box>
    </Box>
  );
}

export default SectionFour;
