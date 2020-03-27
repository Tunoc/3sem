export const ApiFacade = () => {
  // makeOptions creates the headers and optional body for post or put
  const makeOptions = (method, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  const getData = async (url) => {
    const options = makeOptions("GET"); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };
  const postData = async (url, data) => {
    const options = makeOptions("POST", data); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };
  return { getData, postData };
};

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}
