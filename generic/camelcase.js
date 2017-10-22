function camelcase(flag) {
  return flag.split('-').reduce(function(string, word) {
    return string + word[0].toUpperCase() + word.slice(1)
  })
}