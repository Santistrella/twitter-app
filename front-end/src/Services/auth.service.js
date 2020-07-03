import Api from '../Api/index'

const register = (body) => {
  return Api.createPublicResource(body, 'register').then((response) => {
    console.log(response)
  });
};

const login = (data) => {
  return Api.sendRequest('login', {method: 'POST', body: data})
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };