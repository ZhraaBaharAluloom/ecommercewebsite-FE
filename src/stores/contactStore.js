import { action, makeObservable, observable, configure } from "mobx";

import instance from "./instance";
configure({
  enforceActions: "never",
});

class ContactStore {
  contacts = [];
  loading = true;

  contactUs = async (contactData) => {
    const res = await instance.post("/contacts", contactData);
    if (res.data.status === "success") {
      alert("Message Sent.");
      console.log("Amazing! you did it");
    } else if (res.data.status === "fail") {
      alert("Message failed to send");
    }
  };

  constructor() {
    makeObservable(this, {
      contacts: observable,
      contactUs: action,
    });
  }
}

const contactStore = new ContactStore();
export default contactStore;
