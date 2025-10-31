import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from 'process';

const uri = env.URI || "mongodb+srv://guiOS:yV4pAc3qk1uu44zZ@cluster0.kfckmci.mongodb.net/?appName=Cluster0"

export const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
