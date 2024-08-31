export interface Repository {
  create(data: unknown): Promise<unknown>
  find(customerCode: string): Promise<unknown>
  findAll(): Promise<unknown>
}
