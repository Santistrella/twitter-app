const API_HOST = 'http://localhost/api';

const fetchResource = (resourceName, userOptions = {}, id) => {
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
  debugger;
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
      console.log('ee')
      return responseObject.json()
    } else if (responseObject.status == 200) {
      return responseObject.json()
    }
  }).then(x => {
    console.log(x)
  });
}

const getUsers = (userOptions) => {
  return fetchResource('users', userOptions);
}

const getUser = (id) => {
  return fetchResource('users', {}, id);
}

const createResource = (data, model) => {
  return fetchResource(model, {method: 'POST', body: data})
}

export default {fetchResource, getUsers, createResource, getUser} ;