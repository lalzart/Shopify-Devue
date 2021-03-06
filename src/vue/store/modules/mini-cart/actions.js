import axios from "axios";
import qs from "qs";
import { formatCart, formatProduct } from "@vue/helpers";

export default {
  setCart: ({ commit }) => {
    axios
      .get("/cart.js")
      .then(response => {
        console.log(response.data)
        commit("setCart", response.data);
      })
      .catch(error => {
        return error.message;
      });
  },
  addItem: ({ commit, state }, payload) => {
    console.log("add item")
    if (state.isFetching) {
      return;
    } else {
      console.log("PL", payload)
      commit("toggleFetching");
      axios
        .post("/cart/add.js", qs.stringify(payload))
        .then(response => {
          console.log("res", response);
          commit("setCart", response.data);
          commit("toggleFetching");
          commit("setDrawer", "open");
        })
        .catch(error => {
          commit("toggleFetching");
          console.log("err", error.message)
          return error.message;
        });
    }
  },
  deleteItem: ({ commit, state }, id) => {
    if (state.isFetching) {
      return;
    } else {
      commit("toggleFetching");
      axios
        .post(
          "/cart/change.js",
          qs.stringify({
            id,
            quantity: 0
          })
        )
        .then(response => {
          commit("setCart", normalizeShopifyCart(response.data));
          commit("toggleFetching");
        })
        .catch(error => {
          commit("toggleFetching");
          return error.message;
        });
    }
  },
  updateItems: ({ commit, state }, payload) => {
    const { updates, error } = payload;
    if (state.isFetching) {
      return;
    } else {
      commit("toggleFetching");
      axios
        .post("/cart/update.js", qs.stringify({ updates }))
        .then(response => {
          commit("setCart", normalizeShopifyCart(response.data));
          commit("setError", error);
          commit("toggleFetching");
        })
        .catch(error => {
          commit("toggleFetching");
          return error.message;
        });
    }
  }
};
