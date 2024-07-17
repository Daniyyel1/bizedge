import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";

function SectionFive() {
  return (
    <Box sx={{ marginTop: {xs:"40px",md:"120px"} }}>
      <Typography
        sx={{
          margin:{xs:"auto",md:"0px"},
          textAlign: "center",
          fontFamily: "blacksansregular",
          fontSize: {xs:"24px",md:"27px"},
          fontWeight: "600",
          width:{xs:"300px",md:"inherit"},
          lineHeight:{xs:"28px",md:""}
        }}
        variant="h6"
      >
        We here to provide you with all you need
      </Typography>
      <Typography
        sx={{
          marginTop: {xs:"10px",md:"30px"},
          textAlign: "center",
          fontSize: "15px",
          opacity: ".8",
          width: {xs:"300px",md:"450px"},
          margin: "auto",
          lineHeight: "25px",
        }}
      >
        We hold your hand as your business takes each step. Our goal is to help
        your team run at its smoothest from day one.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "40px",
          flexDirection:{xs:"column",md:"row"},
        }}
      >
        <Card
          variant="contained"
          sx={{
            height: {xs:"120px",md:"170px"},
            width: {xs:"310px",md:"200px"},
            padding: "20px",
            backgroundColor: "#F2F2F2",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontFamily: "blacksansbold" }}>
            Ease of Use
          </Typography>
          <Typography
            sx={{ fontSize: {xs:"14px",md:"12px"}, width: {xs:"260px",md:"150px"}, marginTop: {xs:"3px",md:"10px"} }}
          >
            With our simple interface, employers and employees find it easy to
            operate the app. No specific training is required.
          </Typography>
        </Card>
        <Card
          variant="contained"
          sx={{
            height: {xs:"120px",md:"170px"},
            width: {xs:"310px",md:"200px"},
            padding: "20px",
            backgroundColor: "#F2F2F2",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontFamily: "blacksansbold" }}>
            Built For you
          </Typography>
          <Typography
            sx={{ fontSize: {xs:"14px",md:"12px"}, width: {xs:"280px",md:"135px"}, marginTop: {xs:"3px",md:"10px"} }}
          >
            Designed to support growing businesses and teams. No hidden charge
            or contract.
          </Typography>
        </Card>
        <Card
          variant="contained"
          sx={{
            height: {xs:"120px",md:"170px"},
            width: {xs:"310px",md:"200px"},
            padding: "20px",
            backgroundColor: "#F2F2F2",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontFamily: "blacksansbold" }}>
            Safe & Secure
          </Typography>
          <Typography
            sx={{ fontSize: {xs:"14px",md:"12px"}, marginTop: {xs:"3px",md:"10px"}, width: {xs:"260px",md:"140px"} }}
          >
            We maintain the confidentiality, integrity and availability of your
            data. No third party has your data.
          </Typography>
        </Card>
        <Card
          variant="contained"
          sx={{
            height: {xs:"120px",md:"170px"},
            width: {xs:"310px",md:"200px"},
            padding: "20px",
            backgroundColor: "#F2F2F2",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontFamily: "blacksansbold" }}>
            Support
          </Typography>
          <Typography
            sx={{ fontSize: {xs:"14px",md:"12px"}, marginTop: {xs:"3px",md:"10px"}, width: {xs:"260px",md:"140px"} }}
          >
            Our customer service team is quick to offer assistance when you need
            it.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default SectionFive;
