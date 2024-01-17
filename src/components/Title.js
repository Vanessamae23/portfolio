import { ArrowRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import bgm from "../assets/images/me.png";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <Container>
      <Grid container flexDirection='row' justifyContent="space-around" alignItems='center'>
        <Grid item lg={7} md={6} xs={7} justifyContent="space-around" flexDirection="column">
          <Typography variant="h2">Vanessa Mae</Typography>
          <Box sx={{ justifyContent: 'center'}}>
            <TypeAnimation
              sequence={[
                "Hello World !", // Types 'One'
                2000, // Waits 1s
                "I am a developer", // Types 'One'
                2000, // Waits 1s
                "I love to code", // Deletes 'One' and types 'Two'
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1.2rem",
                display: "inline-block",
                textDecoration: "underline",
                textDecorationThickness: "2px",
              }}
            />
          </Box>

          <Button sx={{ marginTop: '30px', borderRadius: '20px'}} aria-label="resume" variant="contained" color="primary">
            <Typography  variant="h6">Resume</Typography>
            <ArrowRight />
          </Button>
        </Grid>
        <Grid item lg={5} md={6} xs={5}>
          <Avatar src={bgm} sx={{ width: '100%', height:'100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Title;
