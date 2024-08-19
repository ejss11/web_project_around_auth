const BASE_URL = "https://tripleten.desarrollointerno.com";

// Función para registrar un nuevo usuario
export const signup = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(`Error: ${resp.status}`);
    })
    .then((res) => res.data);
};

// Función para iniciar sesión
export const signin = (email, password) => {
  return fetch(`https://tripleten.desarrollointerno.com/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(`Error: ${resp.status}`);
    })
    .then((res) => {
      localStorage.setItem("jwt", res.token);
      return res.token;
    });
};

// Función para comprobar la validez del token
export const checkToken = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((res) => res.data);
};
