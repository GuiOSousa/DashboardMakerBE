import { ObjectId } from "mongodb";
import { mongoClient } from "../../connection/mongoClient";
import IDashboardRepository from "../IDashboardRepository";

export default class MongoDashboardRepository implements IDashboardRepository {
    async getCollection() {
        await mongoClient.connect();
        const dbName = "dashboardMaker";
        const client = mongoClient.db(dbName);
        return client.collection('dashboards');
    }

    async getAll(filters: any): Promise<any> {
        const collection = await this.getCollection()
        return await collection.find(filters).toArray()
    }

    async getById(id: ObjectId): Promise<any> {
        const collection = await this.getCollection()
        return await collection.findOne({ _id: id })
    }
    
    async create(data: any): Promise<any> {
        const collection = await this.getCollection()
        return await collection.insertOne(data)
    }
    
    async update(id: ObjectId, data: any): Promise<any> {
        const collection = await this.getCollection()
        return await collection.updateOne({_id: id}, { $set: data })
    }

    async delete(id: ObjectId): Promise<any> {
        const collection = await this.getCollection()
        return await collection.deleteOne({_id: id})
    }
}