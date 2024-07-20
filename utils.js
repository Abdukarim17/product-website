export function checkToken() {
    const token = localStorage.getItem("token");
    // token.remove()
    console.log(token)
    return Boolean(token)
  }
  
  export function redirect(path) {
    window.location = path;
  }