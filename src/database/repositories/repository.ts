export interface Repository {
  create(data: unknown): Promise<unknown>
  find(data: string): Promise<unknown>
  findAll(): Promise<unknown>
}
