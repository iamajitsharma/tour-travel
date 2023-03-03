import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Coupon = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="COUPON" subtitle="Welcome to your coupon section" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <LocalOfferOutlinedIcon sx={{ mr: "10px" }} />
            Add New Coupon
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Coupon;
