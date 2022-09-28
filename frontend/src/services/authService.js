import { api, requestConfig } from "../utils/config";

// Register a user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Logout an user
const logout = () => {
  localStorage.removeItem("user");
};

// Login an user
const login = async (data) => {
  const config = requestConfig("POST", data);

  const res = await fetch(api + "/users/login", config)
    .then((res) => res.json())
    .catch((err) => err);

  if (res._id) {
    localStorage.setItem("user", JSON.stringify(res));
  }

  return res;

  try {
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;