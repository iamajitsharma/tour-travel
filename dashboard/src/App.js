import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Booking from "./scenes/booking/Booking";
import Product from "./scenes/product/Product";
import AddProduct from "./scenes/product/AddNewProduct";
import Category from "./scenes/product/AddCategory";
import Coupon from "./scenes/product/CouponCode";
import Team from "./scenes/team";
import Analysis from "./scenes/business-analysis/BusinessAnalysis";
import Contacts from "./scenes/contacts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Form from "./scenes/form/index";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/product" element={<Product />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/category" element={<Category />} />
              <Route path="/coupon" element={<Coupon />} />
              <Route path="/team" element={<Team />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
