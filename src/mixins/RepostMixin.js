export default {
  methods: {
    isReposted(post) {
      return post?.viewer?.reposted ? true : false
    },
    handleRepost(post) {
      if (!post.viewer.reposted) {
        post.stats.reposts++
        post.viewer.reposted = true
      } else {
        post.stats.reposts--
        post.viewer.reposted = false
      }
    },
  },
}
