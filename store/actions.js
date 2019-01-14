export default {
  async getList({ commit, state }, params){
    if (!this.getters.getReadingList.length){
      const list = await this.$axios.$get('https://api.are.na/v2/channels/reading-1527615453?per=1000')
      const topfive = list.contents.reverse().slice(0,5)
      commit('addReadingList', topfive)
    }
  }
}
