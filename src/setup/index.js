import './console'

const USER_DIR = java.lang.System.getProperty("user.dir");
const NODE_MODULES = `${USER_DIR}/node_modules`

//Required polyfil library (for..of)
require(`${NODE_MODULES}/babel-polyfill/dist/polyfill`)