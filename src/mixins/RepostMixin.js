export default {
  methods: {
    isReposted(item) {
      return item?.viewer?.reposted ? true : false
    },
    handleRepost(item) {
      if (!item) return
      if (!item.viewer) item.viewer = { reposted: false }
      if (!item.stats) item.stats = { reposts: 0 }
      if (typeof item.stats.reposts !== 'number') item.stats.reposts = 0

      if (!item.viewer.reposted) {
        item.stats.reposts++
        item.viewer.reposted = true
      } else {
        item.stats.reposts--
        item.viewer.reposted = false
      }
    },
  },
}
