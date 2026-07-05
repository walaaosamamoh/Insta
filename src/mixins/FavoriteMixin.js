export default {
  methods: {
    isFavorite(post) {
      return post?.viewer?.liked ? true : false
    },
    handleLike(post) {
      if (!post.viewer.liked) {
        post.stats.likes++
        post.viewer.liked = true
      } else {
        post.stats.likes--
        post.viewer.liked = false
      }
    },
  },
}
