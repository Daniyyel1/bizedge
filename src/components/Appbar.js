import { Button, CardContent, Container, ImageList, ImageListItem, colors,img,Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bizedge from "../assets/bizedge.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import useMediaQuery from "@mui/material";

function Appbar() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          marginTop: "20px",
          margin:"auto",
          padding:{xs:"10px",md:"0px"}
        }}
      >
        <img className="lol" src={bizedge} alt="bizedge"></img>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            color: "black",
            width:{xs:"400px",md:"inherit"}
            
          }}
        >
          <Link
            sx={{
              textDecoration: "none",
              color: "black",
              fontFamily: "blacksansregular",
              fontWeight: "600",
              display:{xs:"none",md:"inherit"}
            
              
            }}

            href="#"
          >
            Home
          </Link>
          <Link
            sx={{
              textDecoration: "none",
              color: "black",
              fontFamily: "blacksansregular",
              fontWeight: "20",
              display:{xs:"none",md:"inherit"}
            }}
            href="#"
          >
            Request a Demo
          </Link>
          <Button
            sx={{
              width: "130px",
              color: "black",
              backgroundColor: "#EAF8FA",
              border: "none",
              textTransform: "capitalize",
              fontFamily: "blacksansblack",
              fontWeight: "400",
              fontSize: "15px",
              display:{xs:"none",md:"inherit"}
            }}
            variant="outlined"
            size="medium"
          >
            sign in
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ width: {xs:"300px",md:"1100px"}, paddingBlock: {xs:"2rem",md:"4rem"}, textAlign: "center",margin:"auto" }}
      >
        <Typography
          variant="h1"
          textAlign="center"
          textTransform="capitalize"
          fontSize="55px"
          fontWeight="550"
          width="800px"
          margin="auto"
          lineHeight="90px"
          fontFamily="blacksansbold"

         sx={{
          "@media(max-width: 600px)": {
            fontSize: "24px",
            width:"300px", 
            lineHeight:"40px",
            fontFamily:"blacksansregular",
            fontWeight:"900"
          }
         }}

        >
          unlock your full HR potential with our powerful people management app.
        </Typography>

        <Typography
          fontSize="18px"
          width="550px"
          margin="auto"
          fontFamily="blacksansregular"
          lineHeight="30px"

          sx={{
            "@media(max-width: 600px)":{
              fontSize:"14px",
              width:"320px",
              lineHeight:"20px",
              marginTop:"10px",
              opacity:".7"

            }
          }}
        >

          Elevate your HR game with automated employee onboarding, intuitive
          performance tracking and seamless team collaboration.
        </Typography>
        <Box
          sx={{
            gap: "20px",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            flexDirection:{xs:"column-reverse",md:"row"},
            width:{xs:"300px",md:"inherit"}

          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#2898A4",
              border: "none",
              backgroundColor: "#E0EEF0",
              textTransform: "capitalize",
              fontFamily: "blacksansblack",
              fontSize: "13px",
              fontWeight: "600",
              width: {xs:"330px",md:"160px"}


            }}
          >
            sign up for free
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "160px",
              backgroundColor: "#2898A4",
              color: "#fff",
              fontSize: "13px",
              fontFamily: "blacksansblack",
              textTransform: "initial",

              width:{xs:"330px",md:"160px"}


            }}
          >
            Book a Demo
          </Button>
        </Box>
         <Box sx={{
          margin:"auto",
          width:{xs:"300px",md:"400px"},
          marginTop:"40px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"10px"
          
         }} >
     
           

            <img className="frameOne" src={frame1} alt="frame1"></img>

          <img className="frameTwo" src={frame2} alt="frame2"></img>

           <img className="frameThree"
            src={frame3}
            alt="frame3"
          ></img>

         </Box>
         


      </Box>
    </Box>
  );
}

export default Appbar;
