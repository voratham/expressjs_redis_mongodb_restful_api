var MongoClient = require( 'mongodb' ).MongoClient;

var _db = null;

exports.connect = function(db, done) {
  if (_db) return done();

  MongoClient.connect(db.url, function (err, client) {
    if (err) return done(err);
    _db = client.db(db.dbName);
    done();
  })
}

exports.get = function() {
  return _db;
}
