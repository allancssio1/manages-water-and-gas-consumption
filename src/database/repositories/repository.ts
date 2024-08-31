import { File } from '@prisma/client'

export interface Repository {
  create(data: File): Promise<File>
  findById(id: string): Promise<File>
  findByCustomerCode(customerCode: string): Promise<File>
  findAll(): Promise<File[]>
  confirmMeasure(id: string): Promise<void>
}
