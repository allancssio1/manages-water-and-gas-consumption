import { Request, Response } from 'express'
import { ListMeasures, UploadImage } from '../interfaces/uploadImage'

export class UploadImageController {
  constructor(private readonly uploadService: ListMeasures) {}

  async handler(req: Request, res: Response) {
    const { customer_code } = req.params
    const response = await this.uploadService.handler(customer_code)
    return res.status(response.status).send(response.data)
  }
}
