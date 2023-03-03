import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Category = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CATEGORY" subtitle="Welcome to your category section" />

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
            <CategoryOutlinedIcon sx={{ mr: "10px" }} />
            Add New Category
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
