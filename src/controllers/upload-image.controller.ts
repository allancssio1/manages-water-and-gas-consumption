import { Request, Response } from 'express'
import { UploadImage } from '../interfaces/uploadImage'

export class UploadImageController {
  constructor(private readonly uploadService: UploadImage) {}

  async handler(req: Request, res: Response) {
    console.log('controller')

    const response = await this.uploadService.handler(req)
    console.log('controller back')

    return res.status(response.status).send(response.data)
  }
}
