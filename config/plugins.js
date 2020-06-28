module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer-v3",
    providerOptions: {},
    settings: {
      host: env("SMTP_HOST", "127.0.0.1"),
      port: env.int("SMTP_PORT", 587),
      username: env("SMTP_USERNAME", "username@example.com"),
      password: env("SMTP_PASSWORD", "password"),
      secure: env.bool("SMTP_SECURE", false),
    },
  },
});
