export default {
  methods: {
    isFavorite(item) {
      return item?.viewer?.liked ? true : false
    },
    handleLike(item) {
      if (!item.viewer.liked) {
        item.stats.likes++
        item.viewer.liked = true
      } else {
        item.stats.likes--
        item.viewer.liked = false
      }
    },
  },
}
