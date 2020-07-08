import Api from '../Api/index'

const register = (body) => {
  return Api.createPublicResource(body, 'user').then((response) => {
    console.log(response)
  });
};

const login = (data) => {
  return Api.sendRequest('login', {method: 'POST', body: data})
    .then((response) => {
      console.log('----------')
      console.log(response)
      if (response.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };