export interface IBaseRepository<T> {
    getAll(): Promise<T>;
    getById(id: string): Promise<T>;

}