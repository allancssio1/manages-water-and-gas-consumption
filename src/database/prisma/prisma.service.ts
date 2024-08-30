import { Repository } from '../repositories/repository'

export class PrismaService implements Repository {
  create(data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
  find(data: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
}
