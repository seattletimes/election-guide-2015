var locations = {
  bellevue: "Bellevue City Council",
  king: "King County",
  seattle: "Seattle City Council",
  schoolBoard: "Seattle School Board",
  port: "Port of Seattle"
}

var getTitle = function(locale, position) {
  var l = locations[locale];
  if (["bellevue", "king", "schoolBoard"].indexOf(locale) > -1) {
    return l + " District #" + position;
  }
  if (locale == "port") {
    return l + " Seat #" + position;
  }
  if (locale == "seattle") {
    return position > 7 ? l + " Position #" + position : l + " District #" + position;
  }
  return position;
}

module.exports = getTitle;