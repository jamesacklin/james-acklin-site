var Dat = require("dat-node");

Dat("dist", function(err, dat) {
  if (err) throw err;
  dat.importFiles();
  dat.joinNetwork();
  console.log("My Dat link is: dat://", dat.key.toString("hex"));
});
