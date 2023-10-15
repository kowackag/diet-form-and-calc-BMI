
  const url = "http://localhost:3000";

  export function addOrdersAPI(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return _fetch(options, `/orders`);
  }

  export function loadProductsAPI() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return _fetch(options, `/products`);
  }

  function _fetch(options, additionalPath = "") {
    const urlCopy = `${url}${additionalPath}`;
    return fetch(urlCopy, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }
