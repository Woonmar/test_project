import axios from "axios";

const authService = {
  login: user => {
    return axios.post('/user/login')
      .then((res) => res.json())
      .then((data) => data)
  },
  register: user => {
    return axios.post('/user/register')
      .then((res) => res.json())
      .then((data) => data)
  },
  logout: () => {
    return fetch('/user/logout')
      .then((res) => res.json())
      .then((data) => data)
  },
  isAuthenticated: () => {
    return fetch('/user/authenticated')
      .then((res) => {
        if (res.status !== 401)
          return res.json().then((data) => data);
        else
          return { isAuthenticated: false, user: { username: '', role: '' } };
      });
  }
}

export default authService;