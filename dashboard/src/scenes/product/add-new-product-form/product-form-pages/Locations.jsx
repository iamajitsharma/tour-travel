import React from 'react'
import { Box, MenuItem, Button, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";


const Locations = () => {
  return (
    <>
      <div>Locations</div>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Cateogry"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.category}
        // name="category"
        // error={!!touched.category && !!errors.category}
        // helperText={touched.category && errors.category}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="10">Tour</MenuItem>
        <MenuItem value="20">Activity</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Cateogry Type"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.categoryType}
        // name="categoryType"
        // error={!!touched.categoryType && !!errors.categoryType}
        // helperText={touched.categoryType && errors.categoryType}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="scuba diving">Scuba Diving</MenuItem>
        <MenuItem value="goa watersports">Goa Watersports</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Duration"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.duration}
        // name="duration"
        // error={!!touched.duration && !!errors.duration}
        // helperText={touched.duration && errors.duration}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Pick Up Location"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.pickUpLocation}
        // name="pickUpLocation"
        // error={!!touched.pickUpLocation && !!errors.pickUpLocation}
        // helperText={touched.pickUpLocation && errors.pickUpLocation}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Description"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.email}
        // name="description"
        // error={!!touched.description && !!errors.description}
        // helperText={touched.description && errors.description}
        sx={{ gridColumn: "span 4" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Highlight"
        multiline
        rows={10}
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.highlight}
        // name="highlight"
        // error={!!touched.highlight && !!errors.highlight}
        // helperText={touched.highlight && errors.highlight}
        sx={{ gridColumn: "span 4" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Inclusion"
        multiline
        rows={10}
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.inclusion}
        // name="inclusion"
        // error={!!touched.inclusion && !!errors.inclusion}
        // helperText={touched.inclusion && errors.inclusion}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Exclusion"
        multiline
        rows={10}
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.exclusion}
        // name="exclusion"
        // error={!!touched.exclusion && !!errors.exclusion}
        // helperText={touched.exclusion && errors.exclusion}
        sx={{ gridColumn: "span 2" }}
      />

      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Regular Price"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.regularPrice}
        // name="regularPrice"
        // error={!!touched.regularPrice && !!errors.regularPrice}
        // helperText={touched.regularPrice && errors.regularPrice}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Sale Price"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.salePrice}
        // name="salePrice"
        // error={!!touched.salePrice && !!errors.salePrice}
        // helperText={touched.salePrice && errors.salePrice}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Discount Type"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.discountType}
        // name="discountType"
        // error={!!touched.discountType && !!errors.discountType}
        // helperText={touched.discountType && errors.discountType}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="scuba diving">Percentage</MenuItem>
        <MenuItem value="goa watersports">Amount</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Discount"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.discount}
        // name="discount"
        // error={!!touched.discount && !!errors.discount}
        // helperText={touched.discount && errors.discount}
        sx={{ gridColumn: "span 2" }}
      />
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="City"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.city}
        // name="city"
        // error={!!touched.city && !!errors.city}
        // helperText={touched.city && errors.city}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="scuba diving">Kolkata</MenuItem>
        <MenuItem value="goa watersports">Calangute</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="State"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.state}
        // name="state"
        // error={!!touched.state && !!errors.state}
        // helperText={touched.state && errors.state}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="Goa">Goa</MenuItem>
        <MenuItem value="West Bengal">West Bengal</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Country"
        select
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.country}
        // name="country"
        // error={!!touched.country && !!errors.country}
        // helperText={touched.country && errors.country}
        sx={{ gridColumn: "span 2" }}
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="Dubai">Dubai</MenuItem>
      </Field>
      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Address"
        // onBlur={handleBlur}
        // onChange={handleChange}
        // value={values.geoLocation}
        // name="geoLocation"
        // error={!!touched.geoLocation && !!errors.geoLocation}
        // helperText={touched.geoLocation && errors.geoLocation}
        sx={{ gridColumn: "span 2" }}
      />
    </>
  );
}

export default Locations