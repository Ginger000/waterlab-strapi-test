module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '441fdc6446e2f1c88d6164a71095a9c0'),
  },
});
