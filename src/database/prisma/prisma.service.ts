import { File } from '@prisma/client'
import { Repository } from '../repositories/repository'
import { prisma } from '../../lib/prisma'

export class PrismaService implements Repository {
  async confirmMeasure(id: string): Promise<void> {
    await prisma.file.update({
      where: { id },
      data: {
        confirmed: true,
      },
    })
  }
  async create(data: File): Promise<File> {
    const measure = await prisma.file.create({
      data,
    })

    return measure ?? null
  }
  async findById(id: string): Promise<File> {
    const measure = await prisma.file.findUniqueOrThrow({
      where: { id },
    })
    return measure ?? null
  }
  async findByCustomerCode(customerCode: string): Promise<File> {
    const measure = await prisma.file.findFirstOrThrow({
      where: { customerCode },
    })
    return measure ?? null
  }
  async findAll(): Promise<File[]> {
    const measures = await prisma.file.findMany()
    return measures
  }
}
