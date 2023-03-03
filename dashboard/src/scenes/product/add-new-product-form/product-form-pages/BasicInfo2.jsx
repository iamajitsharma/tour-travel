import React from 'react';
import { Box, TextField, FormGroup, FormControl, FormControlLabel, FormLabel, Checkbox, FormHelperText } from "@mui/material";
import { Field, ErrorMessage } from "formik"; 



const BasicInfo2 = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">DURATIONS</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={gilad}
                  // onChange={handleChange}
                  name="1_hour"
                />
              }
              label="1 Hour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={jason}
                  // onChange={handleChange}
                  name="2_hour"
                />
              }
              label="2 Hour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="4_hour"
                />
              }
              label="4 Hour"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="7_hour"
                />
              }
              label="7 Hour"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="full_day"
                />
              }
              label="Full Day"
            />
          </FormGroup>
        </FormControl>

        {/* ----------------------------------------------------------------- */}

        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
         
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={gilad}
                  // onChange={handleChange}
                  name="10_hour"
                />
              }
              label="10 Hour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={jason}
                  // onChange={handleChange}
                  name="3_hour"
                />
              }
              label="3 Hour"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="5_hour"
                />
              }
              label="5 Hour"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="9_hour"
                />
              }
              label="9 Hour"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="half_day"
                />
              }
              label="Half Day"
            />
          </FormGroup>
        </FormControl>

        {/* --------------------------------------------------------------------- */}

        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={gilad}
                  // onChange={handleChange}
                  name="15_min"
                />
              }
              label="15 Min"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={jason}
                  // onChange={handleChange}
                  name="30_min"
                />
              }
              label="30 Min"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="6_hour"
                />
              }
              label="6 Hours"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="9_hours"
                />
              }
              label="9 Hour"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="multi_day"
                />
              }
              label="Multi Day"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}

export default BasicInfo2;