import nodeMailer from "nodemailer";


export const sendMail = async(text)=>{

  const transporter = nodeMailer.createTransport({
      service :process.env.SMPT_SERVICE,
      auth  :{
          user  : process.env.SMPT_MAIL,
          pass : process.env.SMPT_PASSWORD
      }
  })

  const mailOptions = {
      from : process.env.SMPT_MAIL,
      to: process.env.MYMAIL ,
      subject:"CONTACT REQUEST FROM PORTFOLIO",
      text,
  }

 await transporter.sendMail(mailOptions);
};
