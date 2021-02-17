// import { SMTPClient } from "emailjs";
import { send as sendEmailJS, init } from "emailjs-com";
init("user_NvqpZyMLxLKdVjosSfBXa");
interface templateParams {
  name: string;
  email: string;
  message: string;
}
const sendEmail = async (templateParams: templateParams) => {
  try {
    const response = await sendEmailJS(
      // "asdlfkjasdl;fkjadsf",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TAG,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TAG,
      templateParams
    );
    // console.log("response (sendEmail) : ", response);
    return response;
  } catch (error) {
    // console.log("error (sendEmail): ", error);
    return error;
  }
};

export default sendEmail;
