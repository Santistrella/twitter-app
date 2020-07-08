import authHeader from './authHeader'

const API_HOST = 'http://localhost/api';

const sendRequest = (resourceName, userOptions = {}, id) => {
  const defaultOptions = {
    mode: 'cors',
  };

  const defaultHeaders = {
    "Content-Type": 'application/json',
  };

  const options = {
    ...defaultOptions,
    ...userOptions,
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    }
  };

  let url = `${API_HOST}/${resourceName}`;

  if (id) {
    url = `${url}/${id}`;
  }

  if (options.body && typeof options.body === 'object') {
    options.body = JSON.stringify(options.body);
  }

  console.log(options)
  console.log(url)

  return fetch(url, options).then(responseObject => {
    console.log(responseObject)
    if (responseObject.status > 400) {
      return responseObject
    } else if (responseObject.status == 200) {
      return responseObject
    }
  }).then(x => {
    return x
  });
}

const createPublicResource = (data, model) => {
  return sendRequest(model, {method: 'POST', body: data})
}

const getPublicResource = (model) => {
  return sendRequest(model, {method: 'GET'})
}

const getPrivateResource = (model) => {
  return sendRequest(model, {method: 'GET', headers: authHeader()})
}

const createPrivateResource = (data, model) => {
  return sendRequest(model, {method: 'POST', body: data, headers: authHeader()})
}

export default { sendRequest, createPublicResource, createPrivateResource, getPrivateResource, getPublicResource } ;