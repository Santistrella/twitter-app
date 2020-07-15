import Api from "../Api/index";

const register = (body) => {
  return Api.createPublicResource(body, "register").then((response) => {
    console.log(response);
    if (response.access_token) {
      localStorage.setItem("user", response.access_token);
    }
  });
};

const login = (data, onSuccess) => {
  return Api.sendRequest("login", { method: "POST", body: data }).then(
    (response) => {
      console.log(response);
      if (response.access_token) {
        localStorage.setItem("user", response.access_token);
        onSuccess();
        return;
      } else {
        console.log("not logged");
      }
      return response.data;
    }
  );
};

const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return localStorage.getItem("user");
};

export default { register, login, logout, getCurrentUser };
