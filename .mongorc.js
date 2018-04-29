// ~/.mongorc.js

// Sets the prompt to be:
//  databaseName@hostName $
var host = db.serverStatus().host;
prompt = function() {
  return db + '@' + host + ' $ ';
};
