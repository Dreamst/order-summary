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
    SET_SUMMARY(state, {products, order}) {
        state.products = products;
        state.order = order;
    }
}

export const actions = {
    async orderSummaryAction({commit}) {
        console.log("orderSummaryAction");
        await this.$axios.$get(
          '/fakeAPI/json-tediber.json', { proxy: { host: '127.0.0.1', port: 3000 } }
        )
        .then((response) => {
            commit("SET_SUMMARY", response);
        })
        .catch( (error) => {
            console.log("[AXIOS ORDER SUMMARY ACTION] ERROR DURING REQUEST", error)
        })
    }
}