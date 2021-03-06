var data = window.guideData;

var candidateMap = data.candidates.reduce(function(map, item) {
  var last = item.name.split(" ").pop();
  item.href = last;
  map[last] = item;
  return map;
}, {});

data.candidates.sort(function(a, b) {
  if (a.href < b.href) return -1;
  if (b.href < a.href) return 1;
  return 0;
});

var races = data.candidates.reduce(function(map, item) {
  var location = item.category;
  var race = item.position;
  if (!map[location]) map[location] = {};
  if (!map[location][race]) map[location][race] = [];
  map[location][race].push(item);
  return map;
}, {});

var getTitle = require("./getTitle");

data.candidates.forEach(function(c) {
  c.raceName = getTitle(c.category, c.position);
  c.opponents = races[c.category][c.position].filter(x => x != c);
});

var questions = {
  seattle: ["sea_housing", "sea_movement", "sea_safety", "sea_tents", "sea_drilling"],
  bellevue: ["b_arch", "b_transit", "b_growth"],
  king: ["king_boundary", "king_housing", "king_transit"],
  snohomish: ["sno_courthouse", "sno_finances", "sno_transit"],
  port: ["port_cargo", "port_waterfront", "port_traffic", "port_lease"],
  schoolBoard: ["school_issue", "school_inequity", "school_strike", "school_testing"]
};

try {

for (var key in questions) {
  questions[key] = questions[key].map(k => ({ q: k, label: data.strings[k].question }));
}

} catch (e) { console.log(e); }

var guide = {
  candidates: {
    all: data.candidates,
    lookup: candidateMap
  },
  races,
  questions,
  measures: data.measures
};

module.exports = guide;