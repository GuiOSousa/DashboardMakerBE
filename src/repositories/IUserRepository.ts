export default interface IUserRepository {
    getAll(): Promise<any>
    create(data: any): Promise<any>
    delete(id: string): Promise<any>
}