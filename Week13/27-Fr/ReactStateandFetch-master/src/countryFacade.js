//Add imports here
let URL_Label = "http://localhost:3333/labels";
let URL_Countries = "http://localhost:3333/countries";

// function makeOptions(method, body) {
//   var opts = {
//     method: method,
//     headers: {
//       "Content-type": "application/json"
//     }
//   };
//   if (body) {
//     opts.body = JSON.stringify(body);
//   }
//   return opts;
// }

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const countryFacade = () => {

  const getLabels = () => {
    return fetch(URL_Label).then(handleHttpErrors);
  }

  const getCountries = () => {
    return fetch(URL_Countries).then(handleHttpErrors);
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade;