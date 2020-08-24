const browserSync = require("browser-sync");
const BASE_URL = "lance-vue-js-play-store.myshopify.com";
const PREVIEW_QUERY = "?preview_theme_id=109069271199";

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: "browserUpdate.js"
});
