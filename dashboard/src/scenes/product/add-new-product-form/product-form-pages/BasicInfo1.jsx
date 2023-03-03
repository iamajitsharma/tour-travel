import { TextField, Box } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const BasicInfo1 = ({ values }) => {
  return (
    <>
      <h4>BasicInfo 1</h4>

      <Field
        as={TextField}
        fullWidth
        variant="outlined"
        type="text"
        label="Activity Name"
        values={values.name}
        name="activity_name"
        id="activity_name"
        //error={!!touched.productTitle && !!errors.productTitle}
        //helperText={touched.productTitle && errors.productTitle}
        sx={{ gridColumn: "span 4" }}
        // onChange={handleChange}
        // onBlur={handleBlur}
        helperText={<ErrorMessage name="activity_name" />}
      />
    </>
  );
};

export default BasicInfo1;
