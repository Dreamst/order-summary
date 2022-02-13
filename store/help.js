export const state = () => ({
    assistances: [],
})

export const getters = {
    getAssistances(state) {
        return state.assistances
    }
}

export const mutations = {
    SET_ASSISTANCES(state, {help}) {
        state.assistances = help
    }
}

export const actions = {
    async assistancesAction({commit}) {
        console.log("assistancesAction");
        await this.$axios.$get(
          '/fakeAPI/json-tediber.json', { proxy: { host: '127.0.0.1', port: 3000 }}
        )
        .then((response) => {
            commit("SET_ASSISTANCES", response);
        })
        .catch( (error) => {
            console.log("[AXIOS HELP ACTION] ERROR DURING REQUEST", error)
        });
    }
}