import axios from "axios";

const authService = {
  login: user => {
    return axios.post('/user/login', user, {withCredentials:true})
      .then((res) => res.data)
      .then(() => window.location.replace('/') )
  },
  register: user => {
    return axios.post('/user/register', user, {withCredentials:true})
    .then((res) => res.data)
    .then(() => window.location.replace('/login') )
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
          return { isAuthenticated: false, user: { username: '', role: '', email: '' } };
      });
  }
}

export default authService;