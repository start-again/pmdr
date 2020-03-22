export const mutations = {
  add(state) {
    this.state.round++
  },

  reset(state) {
    this.state.round = 1
  },
}
