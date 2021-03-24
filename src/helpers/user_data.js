// module for saving tokens to local storage
const USER_KEY = "user";
// tokens = { accessToken: "xyz", refreshToken: "abc" }
export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser() {
  console.log(JSON.parse(localStorage.getItem(USER_KEY)));
  return JSON.parse(localStorage.getItem(USER_KEY));
}

export function deleteUser() {
  localStorage.removeItem(USER_KEY);
}