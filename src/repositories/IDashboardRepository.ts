import { ObjectId } from "mongodb"

export default interface IDashboardRepository {
    getAll(filters: any): Promise<any>
    getById(id: ObjectId): Promise<any>
    create(data: any): Promise<any>
    update(id: ObjectId, data: any): Promise<any>
    delete(id: ObjectId): Promise<any>
}