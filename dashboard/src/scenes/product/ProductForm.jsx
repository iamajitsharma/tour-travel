import React from "react";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";

const ProductForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <form className="form-container">
        <div className="form-group">
          <input type="text" placeholder="Product Title" />
        </div>
      </form>
    </Box>
  );
};

export default ProductForm;
