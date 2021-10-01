const user = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, value) {
      state.user = value
    },
  },
  actions: {
    login({ commit }) {
      this.$githubLoginPopup()
        .then((result) => {
          const { token, user } = result

          localStorage.setItem('token', token)
          commit('setUser', user)
        })
        .catch((error) => {
          if (error) localStorage.setItem('token', '')
        })
    },
    async logout({ commit }) {
      try {
        await this.$githubLogout()
        localStorage.setItem('token', '')
        commit('setUser', null)
      } catch (error) {
        console.log(error)
      }
    },
  },
}

export default user
