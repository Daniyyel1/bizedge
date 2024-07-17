import { Box, Button, Card, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SectionSix() {
  return (
    <Box>
      <Box sx={{ marginTop: {xs:"40px",md:"120px"} }}>
        <Typography
          variant="h5"
          sx={{
            margin:{xs:"auto",md:"inherit"},
            textAlign: "center",
            fontFamily: "blacksansregular",
            fontSize: {xs:"25px",md:"33px"},
            fontWeight: "600",
            width:{xs:"340px",md:"inherit"}

          }}
        >
          Choose the right plan for your business
        </Typography>
      </Box>

      <Box
        sx={{
          height: {xs:"50px",md:"50px"},
          width: {xs:"280px",md:"350px"},
          backgroundColor: "whitesmoke",
          margin: "auto",
          borderRadius: "30px",
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          gap: {xs:"20px",md:"40px"},
        }}
      >
        <Box
          sx={{
            height: "45px",
            width: {xs:"140px",md:"195px"},
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "#FCE2AF",
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "blacksansregular",
              fontWeight: "600",
            }}
          >
            yearly
          </Typography>
          <Box
            sx={{
              height: "30px",
              width: {xs:"70px",md:"120px"},
              borderRadius: "30px",
              backgroundColor: "#FF6666",
            }}
          >
            <Typography
              sx={{ color: "#fff", padding: "5px", fontSize: {xs:"9px",md:"16px"} }}
            >
              Up to 33% Off
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "blacksansregular",
            fontWeight: "550",
            fontSize: "18px",
          }}
        >
          Monthly
        </Typography>
      </Box>

      <Box
        sx={{
          width: {xs:"400px",md:"900px"},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          gap: "4px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            height: {xs:"40px",md:"50px"},
            width: {xs:"160px",md:"410px"},
            backgroundColor: "#2898A4",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: {xs:"10px",md:"14px"},
              fontFamily: "blacksansregular",
              fontWeight: "600",
            }}
          >
            BizEdge Suite
          </Typography>
          <Typography
            sx={{ fontSize: "10px", lineHeight: "5px", opacity: ".8" }}
          >
            (Recommended)
          </Typography>
        </Box>

        <Box
          sx={{
            height: {xs:"40px",md:"50px"},
            width: {xs:"160px",md:"410px"},
            backgroundColor: "whitesmoke",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              marginTop: {xs:"10px",md:"14px"},
              textTransform: "capitalize",
              fontFamily: "blacksansregular",
              opacity: ".7",
            }}
          >
            people
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: {xs:"center",md:"flex-end"},
          alignItems:{xs:"center",md:"center"},
          maxWidth: "1045px",
          gap: "14px",
          marginTop: "10px",
          flexDirection:{xs:"column",md:"row"}
        }}
      >
        <Box
          sx={{
            height: "150px",
            width: "150px",
            textAlign: "center",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              textTransform: "capitalize",
              fontFamily: "blacksansregular",
              opacity: ".7",
            }}
          >
            startup
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontFamily: "blacksansregular",
              fontWeight: "600",
            }}
          >
            300 NGN
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "10px",
              fontFamily: "blacksansregular",
            }}
          >
            Per Employee/Month
          </Typography>
          <Button
            sx={{
              marginTop: "10px",
              textTransform: "capitalize",
              width: "150px",
              borderRadius: "5px",
              color: "#000",
              fontFamily: "blacksansregular",
              fontWeight: "600",
              fontSize: "14px",
              height: "43px",
              border: "1px solid #2898A4",
            }}
            variant="outlined"
          >
            get started
          </Button>
        </Box>
        <Card
          sx={{
            height: "150px",
            width: "150px",
            backgroundColor: "#FDEDCE",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              padding: "4px 4px",
              fontSize: "15px",
              textTransform: "capitalize",
              fontFamily: "blacksansregular",
              opacity: ".7",
            }}
          >
            Business(Popular)
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontFamily: "blacksansregular",
              fontWeight: "600",
            }}
          >
            500 NGN
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "10px",
              fontFamily: "blacksansregular",
            }}
          >
            Per Employee/Month
          </Typography>
          <Button
            sx={{
              marginTop: "10px",
              textTransform: "capitalize",
              width: "150px",
              borderRadius: "5px",
              color: "#fff",
              fontFamily: "blacksansregular",
              fontWeight: "600",
              fontSize: "14px",
              height: "43px",
              backgroundColor: "#F8B636",
            }}
            variant="contained"
          >
            get started
          </Button>
        </Card>
        <Box sx={{ height: "150px", width: "150px", textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "15px",
              textTransform: "capitalize",
              fontFamily: "blacksansregular",
              opacity: ".7",
            }}
          >
            pro
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontFamily: "blacksansregular",
              fontWeight: "600",
            }}
          >
            1000 NGN
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "10px",
              fontFamily: "blacksansregular",
            }}
          >
            (Minimum of 20 Employees)
          </Typography>
          <Button
            sx={{
              textTransform: "capitalize",
              width: "150px",
              borderRadius: "5px",
              color: "#000",
              fontFamily: "blacksansregular",
              fontWeight: "600",
              fontSize: "14px",
              height: "43px",
              border: "1px solid #2898A4",
            }}
            variant="outlined"
          >
            get started
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          marginTop: "30px",
          color: "#2898A4",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              textTransform: "capitalize",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            people management
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            MyEdge - Employee self Service
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Task management
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Customer Support
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            MyEdge - Employee self Service
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Time Off Management
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Reports
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Document Management
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Employee Onboarding
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Time & Attendanace Management
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Payroll - Direct deposit
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Accounting - Income
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Accounting - Reports
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Accounting - Expenditure
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Accounting - Contacts
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "14px",
              fontFamily: "blacksansregular",
              fontWeight: "590",
            }}
          >
            Accounting - Inventory
          </Typography>
          <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default SectionSix;
