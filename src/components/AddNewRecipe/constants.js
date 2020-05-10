export const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/misicvolizeku/image/upload";
export const CLOUDINARY_UPLOAD_PRESET = "default_unsigned";

export const layout = {
  labelCol: {
    xs: { offset: 0, span: 24 },
    lg: { offset: 0, span: 5 },
    xl: 6,
    xxl: 8,
  },
  wrapperCol: {
    xs: { offset: 0, span: 24 },
    lg: { offset: 0, span: 14 },
    xl: { offset: 0, span: 12 },
    xxl: { offset: 0, span: 8 },
  },
};
export const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
