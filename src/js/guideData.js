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
  var race = item.position || item.district;
  if (!map[location]) map[location] = {};
  if (!map[location][race]) map[location][race] = [];
  map[location][race].push(item);
  return map;
}, {});

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
  questions
};

module.exports = guide;