import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import campaignImage from "../../../assets/CampaignImages/dog.jpg";
import { Link } from "react-router-dom";

function CampaignOverview() {
  return (
    <div
      style={{
        backgroundColor: "#389e7f",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px", // Add padding top to create space between navbar and white box
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ddeee4",
          borderRadius: 8,
          p: 5,
          width: "80%", // Adjust width of the box
          marginTop: "100px", // Add margin top to create space between navbar and white box
          position: "relative", // Position relative for absolute positioning of grid container
          display: "flex", // Ensure flex display to control child elements
          flexDirection: "column", // Arrange children in column layout
          alignItems: "center", // Align items to the center horizontally
          marginBottom: "100px",
        }}
      >
        <Link to="/campaignexplorer">
          <IconButton
            sx={{
              color: "#493536",
              position: "absolute",
              top: "35px",
              left: "30px",
              fontSize: "100px",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </Link>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          fontSize="40px"
          color="#493536"
          sx={{ marginBottom: "40px" }} // Adding margin bottom to create space
        >
          Rescue Street Dogs
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <Box
            sx={{
              width: "55%",
            }}
          >
            <img
              src={campaignImage}
              alt="dog"
              style={{
                height: "400px",
                width: "100%",
                borderRadius: 20,
              }}
            />
          </Box>

          <Box
            sx={{
              width: "42%",
              textAlign: "left",
            }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                height: "400px",
                color: "#493536",
                backgroundColor: "#d1ebe0",
              }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Category: Animal Welfare
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Location: Galle, Sri Lanka
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Duration: Long Term
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Skill Level: Beginner
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Date: 24.05.2024
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Offered By: Friendly Paws
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Typography variant="h6" gutterBottom color="#493536" fontWeight="bold">
          Overview
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          color="#493536"
          sx={{ marginBottom: "20px" }}
        >
          Join our heartfelt mission to rescue and provide sanctuary for our
          loyal companions. Our dog rescue campaign aims to offer safety, love,
          and a second chance to furry friends in need. Together, let's create a
          community where every tail wags with joy and every bark echoes hope.
        </Typography>
        <Typography variant="h6" gutterBottom color="#493536" fontWeight="bold">
          Objectives
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="- Relocate them to safer areas"
              color="#493536"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="- Give them medical treatments"
              color="#493536"
            />
          </ListItem>
          {/* Add more objectives as needed */}
        </List>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          width="40%"
          sx={{
            marginTop: "20px",
            alignSelf: "center",
            color: "#493536",
            fontWeight: "bold",
            backgroundColor: "#42ce9f",
          }}
        >
          I want to join!
        </Button>
      </Box>
    </div>
  );
}

export default CampaignOverview;
