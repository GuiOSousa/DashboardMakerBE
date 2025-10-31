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

    async getAll(): Promise<any> {
        const collection = await this.getCollection()
        return await collection.find().toArray()
    }

    async getById(id: string): Promise<any> {
        const dashboardId = new ObjectId(id)
        const collection = await this.getCollection()
        return await collection.findOne({ _id: dashboardId })
    }
    
    async create(data: any): Promise<any> {
        const collection = await this.getCollection()
        return await collection.insertOne(data)
    }
    
    async update(id: string, data: any): Promise<any> {
        const dashboardId = new ObjectId(id)
        const collection = await this.getCollection()
        return await collection.updateOne({_id: dashboardId}, { $set: data })
    }

    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}