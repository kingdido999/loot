function convertToSlug (words) {
  return words
    .toLowerCase()
    .replace(/ /g,'-')
}