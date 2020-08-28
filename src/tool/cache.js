export const storageManager = {
  getStorage: (key, transfer) => {
    let value = "";
    transfer
      ?
      (value = JSON.parse(window.localStorage.getItem(key))) :
      (value = window.localStorage.getItem(key));
    return value;
  },
  setStorage(key, value) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof value == "object") {
          window.localStorage.setItem(key, JSON.stringify(value));
        } else {
          window.localStorage.setItem(key, value);
        }
        resolve();
      } catch (e) {
        alert("请关闭浏览器的隐身模式或无痕浏览！");
      }
    });
  },
  removeStorage: data => {
    if (data instanceof Array) {
      for (let i in data) {
        window.localStorage.removeItem(data[i]);
      }
    } else {
      window.localStorage.removeItem(data);
    }
  }
};

export const sessionManager = {
  getSession: (key, transfer) => {
    let value = "";
    let session = window.sessionStorage.getItem(key);
    if (session) {
      transfer ? (value = JSON.parse(session)) : (value = session);
    }
    return value;
  },
  setSession(key, value) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof value == "object") {
          window.sessionStorage.setItem(key, JSON.stringify(value));
        } else {
          window.sessionStorage.setItem(key, value);
        }
        resolve();
      } catch (e) {
        alert("请关闭浏览器的隐身模式或无痕浏览！");
      }
    });
  },
  removeSession: data => {
    if (data instanceof Array) {
      for (let i in data) {
        window.sessionStorage.removeItem(data[i]);
      }
    } else {
      window.sessionStorage.removeItem(data);
    }
  }
};

