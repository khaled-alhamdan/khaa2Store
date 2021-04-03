// Importing instance
import instance from "./instance";

// Omporting AutoObservable
import { makeAutoObservable } from "mobx";

// Importing jwt decode
import decode from "jwt-decode";

class AuthStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = () => {
    const token = localStorage.getItem("User Token");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  setUser = (token) => {
    // save the token in the instance (URL)
    instance.defaults.headers.common.Authorization = `Beare ${token}`;
    this.user = decode(token);
    // Keep user logged in
    localStorage.setItem("User Token", token);
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("User Token");
    this.user = null;
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      alert("Your account has been successfuly created");
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      alert("You are signed in");
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
