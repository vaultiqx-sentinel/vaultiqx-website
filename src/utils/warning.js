export default function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    throw new Error(message); // uncaught → shows full error in console
  }
}