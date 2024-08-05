import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Typography } from "@mui/material";
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
          display: {xs:"none",md:"flex"},
          justifyContent: {xs:"center",md:"flex-end"},
          alignItems:{xs:"center",md:"center"},
          maxWidth: "1045px",
          gap: "20px",
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
              width: "135px",
              borderRadius: "5px",
              color: "#000",
              fontFamily: "blacksansregular",
              fontWeight: "500",
              fontSize: "14px",
              height: "40px",
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
              marginTop: "8px",
              textTransform: "capitalize",
              width: "135px",
              borderRadius: "5px",
              color: "#fff",
              fontFamily: "blacksansregular",
              fontWeight: "500",
              fontSize: "14px",
              height: "40px",
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
              width: "135px",
              borderRadius: "5px",
              color: "#000",
              fontFamily: "blacksansregular",
              fontWeight: "500",
              fontSize: "14px",
              height: "40px",
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
          maxWidth: {xs:"300px",md:"900px"},
          height:{xs:"1150px",md:"inherit"},
          margin: "auto",
          marginTop: "30px",
          color: "#2898A4",
          borderRadius:{xs:"15px",md:"inherit"},
          border:"2px solid whitesmoke"

        }}
      >

          <Typography sx={{display:{xs:"block",md:"none",padding:"14px",color:"#000",fontFamily:"blacksansregular",opacity:".7"}}}>Startup</Typography>
          <Typography sx={{fontFamily:"blacksansregular",color:"#000",padding:"14px",marginTop:"-20px",fontWeight:"700",display:{xs:"block",md:"none"}}}> ₦200</Typography>
          <Typography sx={{fontFamily:"blacksansregular",color:"#000",padding:"14px",marginTop:"-20px",fontWeight:"100",display:{xs:"block",md:"none"}}}>Per Employee</Typography>
          <Button sx={{margin:"auto",border:"1px solid #2898A4",display:{xs:"flex",md:"none"},alignItems:"center",justifyContent:"center",width:"270px",color:"#000",textTransform:"capitalize",fontFamily:"blacksansregular",fontWeight:"600px"}}>Get Started</Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"300px",md:"900px",background:"transparent"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>People Management</Typography>
            
            </AccordionSummary>
           
           <AccordionDetails sx={{display:{xs:"block",md:"none"}}}>
            <Typography sx={{fontFamily:"blacksansregular",fontWeight:"700",fontSize:"14px"}}>Request Leave/Time Off</Typography>
            <Typography sx={{fontFamily:"blacksansregular",fontWeight:"700",marginTop:"15px",fontSize:"14px"}}>View Time Off History</Typography>
           </AccordionDetails>
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600",display:{xs:"none",md:"block"}}}>MyEdge - Employee Self Service</Typography>
            

            </AccordionSummary>
          
            

          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"300px",md:"900px"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Task Management</Typography>
            
            </AccordionSummary>
          
            <AccordionDetails>
              <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",fontSize:"14px"}}>Assign & Collaborate on Tasks</Typography>
            </AccordionDetails>
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"300px",md:"900px"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Customer Support</Typography>
            
            </AccordionSummary>
          
             <AccordionDetails>
               <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",fontSize:"14px"}}>Phone & Chat Support</Typography>

             </AccordionDetails>

          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"295px",md:"900px"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Time Off Management</Typography>
            
            </AccordionSummary>
          
             <AccordionDetails>
               <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",width:"230px",fontSize:"14px"}}>Create and Customize Multiple Time Off Policies</Typography>

                <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",fontSize:"14px",width:"260px",marginTop:"14px"}}>Apply for Time Off from Both Web and Mobile App</Typography>
                <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",fontSize:"14px",marginTop:"15px"}}>Multi-Level Approvals</Typography>
                <Typography sx={{fontFamily:"blacksansregular",fontWeight:"600",fontSize:"14px",marginTop:"15px",width:"280px"}}>Visibility of Who's out & Teams' Upcoming Leave</Typography>
             </AccordionDetails>

          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
            <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Reports</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"300px",md:"900px"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Document Management</Typography>
            
            </AccordionSummary>
           
             <AccordionDetails>
              
              <Typography sx={{fontFamily:"blacksansregular",fontSize:"14px",fontWeight:"600",width:"260px"}}>Store Employee Documents (Educational Certs & more)</Typography>

             </AccordionDetails>
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px", display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Employee Onboarding</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px", display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"700"}}>Time & Attendance Management</Typography>
            
            </AccordionSummary>
              
              <AccordionDetails>
               


              </AccordionDetails>
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:{xs:"300px",md:"900px"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Payroll</Typography>
            
            </AccordionSummary>
          
            <AccordionDetails>

             <Typography sx={{fontFamily:"blacksansregular",fontSize:"14px",fontWeight:"600"}}>Payroll Run History</Typography>
             <Typography sx={{fontFamily:"blacksansregular",fontSize:"14px",fontWeight:"600",marginTop:"15px"}}>View And Share Employee Payslips</Typography>

            </AccordionDetails>
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Payroll - Direct Deposit</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Accounting - Income</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Accounting - Reports</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Accounting - Expenditure</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Accounting - Contacts</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid whitesmoke",
          }}
        >
          <Accordion sx={{width:"900px",display:{xs:"none",md:"block"}}}>
            <AccordionSummary sx={{color:"#2898A4"}}
            
            expandIcon={<KeyboardArrowDownIcon sx={{color:"#2898A4"}} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
         
            <Typography sx={{fontFamily:"blacksansregular",fontSize:"13px",fontWeight:"600"}}>Accounting - Inventory</Typography>
            
            </AccordionSummary>
          
          
          </Accordion>
        
          </Box>
        

  

          





      </Box>
    </Box>
  );
}

export default SectionSix;
