import { Request } from 'express'
import { ResponseMeasure, UploadImage } from '../interfaces/uploadImage'
import { Repository } from '../database/repositories/repository'
import { fileManager } from '../providers/file-manager'

export class UploadImageService implements UploadImage {
  constructor(private readonly repository: Repository) {}
  async handler(req: Request): Promise<ResponseMeasure> {
    const { body, file } = req

    if (!file?.buffer) throw new Error()

    return {
      success: true,
      status: 200,
      data: {
        image_url: '',
        measure_uuid: '',
        measure_value: 0,
      },
    }
  }
}
