import React from "react";

import axios from "axios";
const url =
  "https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com";

export function getPosts() {
  return axios
    .get(url + "/posts")
    .then(function (response: any) {
      return response;
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export function createUser(data: any) {
  return axios
    .post(url + "/auth/users/", data)
    .then(function (response: any) {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

export function login(data: any) {
  return axios
    .post(url + "/auth/token/login", data)
    .then(function (response: any) {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}

export function loginAuth(token: string) {
  const config = {
    headers: { Authorization: `Token ${token}` },
  };
  return axios
    .get(url + "/auth/users/me/", config)
    .then(function (response: any) {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}
