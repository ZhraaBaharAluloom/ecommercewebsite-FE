import { action, makeObservable, observable, configure } from "mobx";

configure({
  enforceActions: "never",
});

class CartStore {
  items = [];
  loading = true;

  fetchCart = async () => {
    const items = localStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    this.items.push(newItem);
    await localStorage.setItem("myCart", JSON.stringify(this.items));
  };

  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
      addItemToCart: action,
      fetchCart: action,
    });
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
