import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const checkoutSchema1 = Yup.object().shape({
  // productTitle: Yup.string().required("required"),
  activity_name: Yup.string().min(3, "It's too short").required("Required"),
//   category: Yup.string().required("required"),
//   categoryType: Yup.string().required("required"),
//   email: Yup.string().email("invalid email").required("required"),
//   contact: Yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: Yup.string().required("required"),
//   address2: Yup.string().required("required"),
});