import * as mongo from 'mongodb';
import {mongodbConfig} from "./config.service";

export let mongodbClient: mongo.MongoClient;
// the db variable is going to point to the primary db that the app is using.
export let db: mongo.Db;

export const mongoReference = mongo;

export const mongodbConnector = new Promise<any>((resolve, reject) => {

    // since this is a promise, it'll be called just once.
    // No matter how many times we use the mongodbConnector
    mongo.MongoClient.connect(mongodbConfig.uri, mongodbConfig.options, (err, client: mongo.MongoClient) => {
        if (err) {
            reject(err);
        } else {
            mongodbClient = client;
            db = client.db("project_manager");
            resolve(client);
        }
    });
});
