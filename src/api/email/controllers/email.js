module.exports = {
    index: async (ctx) => {
      await strapi.plugins["email"].services.email.send({
        to: "duyngph@gmail.com",
        from: "duyngph@gmail.com", //e.g. single sender verification in SendGrid
      //   cc: "valid email address",
      //   bcc: "valid email address",
        replyTo: "duyngph@gmail.com",
        subject: "The Strapi Email plugin worked successfully",
        text: "Hello world!",
        html: "Hello world!",
      });
      ctx.send("Email sent!")
    },
  };
  