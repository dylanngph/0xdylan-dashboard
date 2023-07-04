module.exports = {
  sendEmail: async (to, subject, html, text) => {
    strapi.log.info("services.email.sendEmail Sending email");
    strapi.plugins["email"].services.email.send({
      to,
      from: 'duyngph@gmail.com',
      replyTo: 'duyngph@gmail.com',
      subject,
      text,
      html,
    });
    strapi.log.info("services.email.sendEmail Email sent");
    return { message: "Email Sent" };
  },
};
