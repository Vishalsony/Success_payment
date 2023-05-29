import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./PaymentPage.module.css";
import photo from "../flower.jpg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const PaymentPage = () => {
  return (
    <Container maxWidth="sm" sx={{ p: 0 }}>
      <Box
        className={classes.backColor}
        sx={{
          p: 0,
          m: 0,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          level="h2"
          fontSize="xl"
          className={classes.heading}
          sx={{ mt: 4 }}
        >
          Payment Summary
        </Typography>
        <Box className={classes.box2}>
          <img src={photo} alt="Sorry" className={classes.image} />
        </Box>
        <Typography
          level="h2"
          className={classes.heading2}
          sx={{ mt: 1, mb: 2 }}
        >
          <b>Simarn K Official App</b>
        </Typography>
        <Divider className={classes.divider} />
        <Box className={classes.column1}>
          <Typography level="h2" className={classes.white}>
            150 Gmes
          </Typography>
          <Typography level="h2" className={classes.white}>
            ₹ 4500
          </Typography>
        </Box>
        <Divider className={classes.divider} />
        <Box className={classes.column1}>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            Name
          </Typography>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            Akash Patel
          </Typography>
        </Box>
        <Box className={classes.column1}>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            Email
          </Typography>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            akash@test.com
          </Typography>
        </Box>
        <Typography
          level="h2"
          fontSize="xl"
          sx={{ pr: 2 }}
          className={classes.condition}
        >
          if email long @gmail.com
        </Typography>
        <Box className={classes.column1}>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            Mobile
          </Typography>
          <Typography level="h2" fontSize="xl" className={classes.white1}>
            NA
          </Typography>
        </Box>
        <Divider className={classes.divider} />

        <Box className={classes.column2} sx={{ mt: 3 }}>
          <Button size="large" className={classes.cancleButton}>
            <b>Cancle</b>
          </Button>
          <Button size="large" className={classes.payNowButton}>
            <b>Pay Now</b>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default PaymentPage;
