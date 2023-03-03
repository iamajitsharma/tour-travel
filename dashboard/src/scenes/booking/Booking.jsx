import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Booking = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Booking" subtitle="Welcome to your booking section" />

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
            <BookOnlineOutlinedIcon sx={{ mr: "10px" }} />
            Add New Booking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Booking;
