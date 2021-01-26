import { action, makeObservable, observable, configure, computed } from "mobx";

configure({
  enforceActions: "never",
});

class CartStore {
  items = [];
  loading = true;

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  fetchCart = async () => {
    const items = localStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.pastaId === newItem.pastaId
    );
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + newItem.quantity;
    } else {
      this.items.push(newItem);
    }

    await localStorage.setItem("myCart", JSON.stringify(this.items));
  };

  decreaseItemQuantity = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.pastaId === newItem.pastaId
    );
    if (foundItem) {
      foundItem.quantity = foundItem.quantity - newItem.quantity;
    } else {
      this.items.push(newItem);
    }
    await localStorage.setItem("myCart", JSON.stringify(this.items));
  };

  removeFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.pastaId !== itemId);

    await localStorage.setItem("myCart", JSON.stringify(this.items));
  };

  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
      addItemToCart: action,
      fetchCart: action,
      decreaseItemQuantity: action,
      removeFromCart: action,
      totalQuantity: computed,
    });
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
