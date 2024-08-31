import { Request, Response } from 'express'
import { ConfirmMeasure, UploadImage } from '../interfaces/uploadImage'
import { ConfirmMeasureService } from '../services/confirm-measure.service'

export class ConfirmMeasureController {
  constructor(private readonly confirmMeasureService: ConfirmMeasureService) {}

  async handler(req: Request, res: Response) {
    const { measure_uuid, confirmed_value } = req.body
    const response = await this.confirmMeasureService.handler({
      confirmed_value,
      measure_uuid,
    })
    return res.status(response.status).send(response.data)
  }
}
