export const state = () => ({
    order: [],
    products: []
})

export const getters = {
    getOrder(state) {
        return state.order
    },
    getProducts(state) {
        return state.products
    }
}

export const mutations = {
    SET_PRODUCTS(state, data) {
        state.products = data
    },
    SET_ORDER(state, data) {
        state.order = data
    }
}

export const actions = {
    async orderSummaryAction({commit}) {
        console.log("orderSummaryAction");
        await this.$axios.$get(
          '/fakeAPI/json-tediber.json', { proxy: { host: '127.0.0.1', port: 3000 } }
        )
        .then((response) => {
            console.log("[AXIOS]", response)
            commit("SET_PRODUCTS", response.products);
            commit("SET_ORDER", response.order);
        })
        .catch( (error) => {
            console.log("[AXIOS ORDER SUMMARY ACTION] ERROR DURING REQUEST", error)
        })
    }
}