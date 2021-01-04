import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;
  // Fetch Shops
  fetchShops = async () => {
    try {
      const res = await instance.get("/shops");
      this.shops = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 16 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };

  // Create shop
  createShop = async (newShop) => {
    console.log(
      "🚀 ~ file: shopStore.js ~ line 24 ~ ShopStore ~ createShop= ~ newShop",
      newShop
    );
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await instance.post("/shops", formData);

      this.shops.push(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 26 ~ ShopStore ~ createShop= ~ error",
        error
      );
    }
  };

  // Delete Shop
  deleteShop = async (shopId) => {
    try {
      await instance.delete(`/shops/${shopId}`);
      this.shops = this.shops.filter((shop) => shop.id !== +shopId);
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 33 ~ ShopStore ~ error",
        error
      );
    }
  };

  // Update Shop
  updateShop = async (updatedShop) => {
    try {
      const formData = new FormData();
      for (const key in updatedShop) formData.append(key, updatedShop[key]);
      await instance.put(`/shops/${updatedShop.id}`, formData);
      this.loading = false;

      const shop = this.shops.find((shop) => shop.id === updatedShop.id);
      for (const key in updatedShop) shop[key] = updatedShop[key];
      shop.image = URL.createObjectURL(updatedShop.image);
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 66 ~ ShopStore ~ updateShop= ~ error",
        error
      );
    }
  };
  constructor() {
    makeObservable(this, {
      shops: observable,
      loading: observable,
      fetchShops: action,
      deleteShop: action,
      createShop: action,
      updateShop: action,
    });
  }
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
