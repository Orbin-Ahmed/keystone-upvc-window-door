import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "orbin.ahmed@idealhomeuae.com",
      subject: "New Customer Request from Website",
      text: `You have received a new contact request.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      html: `
        <h3>You have received a new contact request.</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
