var getTitle = function(locale, position) {
  if (["bellevue", "king", "schoolBoard"].indexOf(locale) > -1) {
    return "District #" + position;
  }
  if (locale == "port") {
    return "Seat #" + position;
  }
  if (locale == "seattle") {
    return position > 7 ? "Position #" + position : "District #" + position;
  }
  return position;
}

module.exports = getTitle;