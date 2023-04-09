import * as Yup from 'yup';

const order = Yup.object({
  fullname: Yup.string()
    .required('Full Name is required *'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required *'),
  phone: Yup.number()
    .typeError('Please type phone number')
    .positive("Please type positive number")
    .integer(" can't include a decimal point")
    .min(8)
    .required('Phone number is required *'),
});

const contactUs = Yup.object({
  fullname: Yup.string()
    .required('Full Name is required *'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required *'),
  phone: Yup.number()
    .typeError('Please type phone number')
    .positive("Please type positive number")
    .integer(" can't include a decimal point")
    .min(8)
    .required('Phone number is required *'),
});

const categoryAdd = Yup.object({
  product_type: Yup.string()
    .required('required *'),
  category: Yup.string()
    .required('required *'),
});

const distributorValidationSchema = Yup.object({
  distributor_name: Yup.string()
    .required('required *'),
  owner_name: Yup.string()
    .required('required *'),
  phone: Yup.number()
    .typeError('Please type phone number')
    .positive("Please type positive number")
    .integer(" can't include a decimal point")
    .min(8)
    .required('required *'),
  email: Yup.string()
    .email('Invalid email address')
    .required('required *'),
  social_media: Yup.string()
    .required('required *'),
});

const eventValidationSchema = Yup.object({
  datetime: Yup.string()
    .required('required *'),
  title: Yup.string()
    .required('required *'),
  venue: Yup.string()
    .required('required *'),
  description: Yup.string()
    .required('required *'),
  image: Yup.string()
    .required('required *')
});

const newsValidationSchema = Yup.object({
  datetime: Yup.string()
    .required('required *'),
  title: Yup.string()
    .required('required *'),
  description: Yup.string()
    .required('required *'),
  image: Yup.string()
    .required('required *')
});

export { order, contactUs, categoryAdd, distributorValidationSchema, eventValidationSchema, newsValidationSchema }