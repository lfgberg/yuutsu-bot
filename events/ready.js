module.exports = async (client) => {
  //  Boot
  console.log("Logged on");
  client.user.setActivity(`${client.config.prefix}help ${client.config.prefix}invite`);

  let lfgberg = await client.users.fetch(client.config.ownerID);
  client.lfgberg = lfgberg;
  let hali = await client.users.fetch(client.config.haliID);
  client.hali = hali;
  let tetarian = await client.users.fetch(client.config.tetID);
  client.tet = tetarian;
  let apm = await client.users.fetch(client.config.apmID);
  client.apm = apm;

  //  SQL Database setup
  const SQLite = require("better-sqlite3");
  const sql = new SQLite('./assets/userdata.sqlite');
  //  Check if the table "userData" exists.
  const userData = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'userData';").get();
  if (!userData['count(*)']) {
    //  If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE userData (id TEXT PRIMARY KEY, karma INTEGER, cooldown INTEGER);").run();
    sql.prepare("CREATE UNIQUE INDEX idx_userData_id ON userData (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  //  Establish methods to interact with the tables, and attaches them to the client
  client.removeUser = sql.prepare("DELETE FROM userData where id = ?")
  client.getData = sql.prepare("SELECT * FROM userData WHERE id = ?");
  client.setData = sql.prepare("INSERT OR REPLACE INTO userData (id, karma, cooldown) VALUES (@id, @karma, @cooldown);");

  //  Attaches the table to the client
  client.userData = userData
}
