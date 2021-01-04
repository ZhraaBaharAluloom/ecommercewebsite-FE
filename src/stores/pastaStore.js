import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class PastaStore {
  pastas = [];
  loading = true;

  // Fetch Items
  fetchItems = async () => {
    try {
      const res = await instance.get("/pastas");
      this.pastas = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: pastaStore.js ~ line 16 ~ PastaStore ~ fetchItems= ~ error",
        error
      );
    }
  };

  getPastaById = (pastaId) => {
    return this.pastas.find((pasta) => pasta.id === pastaId);
  };

  // Create  pasta
  createPasta = async (newPasta, shop) => {
    try {
      const formData = new FormData();
      for (const key in newPasta) formData.append(key, newPasta[key]);
      const res = await instance.post(`/shops/${shop.id}/pastas`, formData);
      const pasta = res.data;
      this.pastas.push(pasta);
      shop.pastas = [];
      shop.pastas.push(pasta);
    } catch (error) {
      console.log(
        "🚀 ~ file: pastaStore.js ~ line 26 ~ PastaStore ~ createPasta= ~ error",
        error
      );
    }
  };

  // Delete Pasta
  deletePasta = async (pastaId) => {
    try {
      await instance.delete(`/pastas/${pastaId}`);
      this.pastas = this.pastas.filter((pasta) => pasta.id !== +pastaId);
    } catch (error) {
      console.log(
        "🚀 ~ file: pastaStore.js ~ line 33 ~ PastaStore ~ error",
        error
      );
    }
  };

  // Update Pasta
  updatePasta = async (updatedPasta) => {
    try {
      const formData = new FormData();
      for (const key in updatedPasta) formData.append(key, updatedPasta[key]);
      await instance.put(`/pastas/${updatedPasta.id}`, formData);

      const pasta = this.pastas.find((pasta) => pasta.id === updatedPasta.id);
      for (const key in updatedPasta) pasta[key] = updatedPasta[key];
      pasta.image = URL.createObjectURL(updatedPasta.image);
    } catch (error) {
      console.log(
        "🚀 ~ file: pastaStore.js ~ line 66 ~ PastaStore ~ updatePasta= ~ error",
        error
      );
    }
  };
  constructor() {
    makeObservable(this, {
      pastas: observable,
      loading: observable,
      fetchItems: action,
      deletePasta: action,
      createPasta: action,
      updatePasta: action,
    });
  }
}

const pastaStore = new PastaStore();
pastaStore.fetchItems();
export default pastaStore;
