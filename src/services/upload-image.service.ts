import { Request } from 'express'
import { z } from 'zod'
import sharp from 'sharp'
import { ResponseUploadImage, UploadImage } from '../interfaces/uploadImage'

export class UploadImageService implements UploadImage {
  async handler(req: Request): Promise<ResponseUploadImage> {
    const { body, file } = req

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
