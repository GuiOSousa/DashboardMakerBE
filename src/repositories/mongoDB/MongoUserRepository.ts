import { mongoClient } from "../../connection/mongoClient";
import IUserRepository from "../IUserRepository";

export default class MongoUserRepository implements IUserRepository {
    async getCollection() {
            await mongoClient.connect();
            const dbName = "dashboardMaker";
            const client = mongoClient.db(dbName);
            return client.collection('users');
    }
    
    async getAll(): Promise<any> {
        const collection = await this.getCollection()
        return await collection.find().toArray()
    }
    
    async create(data: any): Promise<any> {
        const collection = await this.getCollection()
        return await collection.insertOne(data)
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}