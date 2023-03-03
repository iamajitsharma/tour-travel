import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import KitesurfingOutlinedIcon from "@mui/icons-material/KitesurfingOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [goAddProduct, setgoAddProduct] = useState(false);

  if (goAddProduct) {
    return <Navigate to="/add-product" />;
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PRODUCT" subtitle="Welcome to your product section" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {
              setgoAddProduct(true);
            }}
          >
            <KitesurfingOutlinedIcon sx={{ mr: "10px" }} />
            Add New Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
