import { Box, Typography } from "@mui/material";
import salary from "../assets/salary.png";

function SectionThree() {
  return (
    <Box>
      <Box
        sx={{
         
          height:{xs:"600px",md:"380px"},
          width: {xs:"370px",md:"900px"},
          backgroundColor: "#FFE5E5",
          borderRadius: "20px",
          display: "flex",
          margin:{xs:"auto",md:"auto"},
          marginTop: {xs:"120px",md:"120px"},
          flexDirection:{xs:"column",md:"row"}
        }}
      >
        <Box sx={{padding:{xs:"0px",md:"50px"}}}>
          <Typography
            sx={{
              marginTop: {xs:"30px",md:"70px"},
              color: "red",
              opacity: ".8",
              fontSize: "13px",
              textAlign:{xs:"center",md:"inherit"}
            }}
          >
            Payroll
          </Typography>
          <Typography
            sx={{
              fontFamily: "blacksansregular",
              fontWeight: "700",
              fontSize: {xs:"28px",md:"23px"},
              marginTop: "10px",
              textAlign:{xs:"center",md:"inherit"}
            }}
            variant="h5"
          >
            Autopilot your payroll
          </Typography>
          <Typography
            sx={{
              fontSize: {xs:"15px",md:"14px"},
              fontWeight: "200",
              opacity: ".8",
              width: "300px",
              margin:{xs:"auto",md:"0px"},
              marginTop: {xs:"20px",md:"23px"},
              lineHeight: {xs:"22px",md:"25px"},
              textAlign:{xs:"center",md:"inherit"}
            }}
          >
            Spend less time doing your company's calculations,deductions and pay
            your team easily. Payroll made simple.
          </Typography>
        </Box>

        <Box
          sx={{
            padding:"15px",
            height: {xs:"400px",md:"380px"},
            width: {xs:"340px",md:"400px"},
            borderRadius: "20px",
            backgroundColor: "#fff",
            position: {xs:"relative",md:"relative"},
            top: {xs:"30px",md:"-20px"},
            border: "1px solid #ADE5EB",
            left: "80px",
            margin:{xs:"0px",md:"0px"},
            marginTop:{xs:"0px",md:"0px"},
            marginLeft:{xs:"-60px",md:"0px"}


          }}
        >
          <Typography
            sx={{ fontFamily: "blacksansregular", fontWeight: "600",padding:{xs:"10px",md:"0px"} }}
          >
            Employee salary
          </Typography>
          <img className="good"
            src={salary}
            alt="salary"
          ></img>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionThree;
