import Api from "../Api/index";
import { useAuth } from "../Context/authentication.context";

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
        onSuccess(response.access_token);
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

export const useAuthApi = () => {
  const auth = useAuth();

  const linkAccount = (body) => {
    return Api.createPrivateResource(body, "linkAccount", auth.token).then(
      (response) => {
        console.log(response);
        if (response.access_token) {
          localStorage.setItem("user", response.access_token);
        }
      }
    );
  };
  const register = (body) => {
    return Api.createPublicResource(body, "register").then((response) => {
      console.log(response);
      if (response.access_token) {
        localStorage.setItem("user", response.access_token);
      }
    });
  };

  return { register, linkAccount };
};

export default { register, login, logout, getCurrentUser };
