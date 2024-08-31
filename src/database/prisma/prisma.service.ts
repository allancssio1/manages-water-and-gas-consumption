import { File } from '@prisma/client'
import { Repository } from '../repositories/repository'
import { prisma } from '../../lib/prisma'

export class PrismaService implements Repository {
  create(data: unknown): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
  find(data: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }
  async findAll(): Promise<File[]> {
    const measures = await prisma.file.findMany()
    return measures
  }
}
