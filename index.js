export default function olm (initial = {}) {
  const map = new Map()

  for (const [key, value] of Object.entries(initial)) {
    map.set(key, value)
  }

  return new Proxy(map, {
    has (map, key) {
      return map.has(key)
    },
    get (map, key) {
      if (map[key]) return map[key].bind(map)
      return map.get(key)
    },
    set (map, key, value) {
      map.set(key, value)
      return value
    },
    deleteProperty (map, key) {
      if (!map.has(key)) return false
      return map.delete(key)
    }
  })
}
