import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from 'process';

const uri = env.URI || ""

export const mongoClient = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
