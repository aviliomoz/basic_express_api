import { MongoClient } from "mongodb";

let db_connection;

export const connectToDB = (callback) => {
  MongoClient.connect("mongodb://0.0.0.0:27017/bookstore")
    .then((client) => {
      db_connection = client.db();
      console.log("Database ready")
      return callback();
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
};

export const getDB = () => {
  return db_connection;
};
