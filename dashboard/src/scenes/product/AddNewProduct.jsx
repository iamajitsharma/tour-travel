import React, {useState} from 'react';
import { Box, MenuItem, Button, TextField } from "@mui/material";
import { Formik, useFormik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

// pages
import BasicInfo1 from './add-new-product-form/product-form-pages/BasicInfo1';
import BasicInfo2 from './add-new-product-form/product-form-pages/BasicInfo2';
import Photos from './add-new-product-form/product-form-pages/Photos';
import Price from './add-new-product-form/product-form-pages/Price';
import Locations from './add-new-product-form/product-form-pages/Locations';

// files
import {checkoutSchema1} from './add-new-product-form/schemas';
//import {initialValues} from './add-new-product-form/InitialValues'

const initialValues = {
  activity_name: "",
}

const AddNewProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [step, setStep] = useState(0);

  
const formList = ["BasicInfo1", "BasicInfo2", "Photos","Price","Locations"];

const pageDisplay = ()=>{
  if (step === 0){
      return <BasicInfo1 values={initialValues}/>
  } else if (step === 1) {
      return <BasicInfo2 values={initialValues} />
  } else if (step === 2){
      return <Photos values={initialValues}/>
  } else if (step === 3){
    return <Price values={initialValues}/>
  } else {
    return <Locations values={initialValues}/>
  }         
};

const schemas = [checkoutSchema1]

const previousStep = ()=>{
  setStep(step - 1);
}

const onSubmit = (values, props)=>{
    console.log("AddNewProducts values = ", values);
    console.log("AddNewProducts props = ", props);
    if (step === formList.length - 1){
      alert("Form submitted");
      setTimeout(()=>{
        props.resetForm();
        props.setSubmitting(false);
        setStep(0);
      }, 1000);
    } else {
      setStep(step + 1);
    }
}
  
  console.log('step', step+1);

  
  return (
    <Box m="20px">
      <Header title="Add Product" subtitle={formList[step]} />

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        //validationSchema={schemas[step]}
      >
        {() => (
          <Form >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >             
              {pageDisplay()}
              
            </Box>
           
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="button"
                color="info"
                variant="contained"
                disabled={step === 0}
                onClick={previousStep}
              >
                Back
              </Button>

              <Button type='submit' color="secondary" variant="contained">
                {step === formList.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


export default AddNewProduct;


