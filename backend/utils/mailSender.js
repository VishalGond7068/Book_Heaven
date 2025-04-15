import nodemailer from "nodemailer";

export const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "akashkumar740813@gmail.com",
        pass: "fdhkildcezhiebuy",
      },
    });

    info = await transporter.sendMail({
      from: '"BookHeaven" <akashkumar740813@gmail.com>',
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
