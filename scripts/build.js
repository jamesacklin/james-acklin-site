var fs = require("fs");
var path = require("path");

var manifest = require("../manifest");

updateManifest();

function updateManifest() {
  var file = path.join(__dirname, "../manifest.json");
  var content = manifest;
  content.updated = new Date();

  fs.writeFileSync(file, JSON.stringify(content, {}, 2));
}
