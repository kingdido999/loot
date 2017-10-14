export function bindAll(_this, that) {
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(_this))
  methods.forEach(function bindOne(method) {
    _this[method] = _this[method].bind(that)
  })
}