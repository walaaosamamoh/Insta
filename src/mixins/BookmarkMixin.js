export default {
  methods: {
    isBookmarked(post) {
      return post?.viewer?.bookmarked
    },
    handleBookmark(post) {
      if (!post.viewer.bookmarked) {
        post.stats.bookmarks++
        post.viewer.bookmarked = true
      } else {
        post.stats.bookmarks--
        post.viewer.bookmarked = false
      }
    },
  },
}
