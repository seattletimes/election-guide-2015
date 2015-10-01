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
  seattle: ["seahousing", "seamovement", "seasafety", "seatents", "seadrilling"],
  bellevue: ["barch", "btransit", "bgrowth"],
  king: ["kingboundary", "kinghousing", "kingtransit"],
  snohomish: ["snocourthouse", "snofinances", "snotransit"],
  port: ["portcargo", "portwaterfront", "porttraffic", "portlease"],
  schoolboard: []
};

for (var key in questions) {
  questions[key] = questions[key].map(k => ({ q: k, label: data.strings[k].question }));
}

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