
export default {
  getActiveTab({commit},activeTab) {
    // 触发对应的mutation
    commit('getActiveTab', activeTab)
  }
}
