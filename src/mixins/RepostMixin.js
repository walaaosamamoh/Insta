export default {
  methods: {
    isReposted(item) {
      return item?.viewer?.reposted ? true : false
    },
    handleRepost(item) {
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
