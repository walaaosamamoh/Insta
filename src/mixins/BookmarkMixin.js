export default {
  methods: {
    isBookmarked(item) {
      return item?.viewer?.bookmarked
    },
    handleBookmark(item) {
      if (!item.viewer.bookmarked) {
        item.stats.bookmarks++
        item.viewer.bookmarked = true
      } else {
        item.stats.bookmarks--
        item.viewer.bookmarked = false
      }
    },
  },
}
