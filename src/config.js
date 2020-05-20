const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://linkedin-oauth-api-dot-tutorial-262713.el.r.appspot.com/'
    : 'http://localhost:4000';
const config = {
  apiUrl,
};

export default config;
