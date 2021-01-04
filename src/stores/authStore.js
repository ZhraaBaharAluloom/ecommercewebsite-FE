import { action, makeObservable, observable } from "mobx";
import decode from "jwt-decode";
import instance from "./instance";

class AuthStore {
  user = null;

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 16 ~ AuthStore ~ signup= ~ error",
        error
      );
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);

      this.setUser(res.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 22 ~ AuthStore ~ signin= ~ error",
        error
      );
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
    localStorage.removeItem("myToken");
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() <= user.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  constructor() {
    makeObservable(this, {
      user: observable,
      signup: action,
      signin: action,
      signout: action,
    });
  }
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
