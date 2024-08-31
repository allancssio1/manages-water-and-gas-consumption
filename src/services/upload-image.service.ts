import { Request } from 'express'
import { ResponseUploadImage, UploadImage } from '../interfaces/uploadImage'
import { Repository } from '../database/repositories/repository'
import { fileManager } from '../providers/file-manager'

export class UploadImageService implements UploadImage {
  constructor(private readonly repository: Repository) {}
  async handler(req: Request): Promise<ResponseUploadImage> {
    const { body, file } = req

    if (!file?.buffer) throw new Error()

    const response = await fileManager.uploadFile('jetpack.jpg', {
      mimeType: file?.mimetype,
      name: `${Date.now()}-${file.originalname}`,
    })
    console.log('🚀 ~ UploadImageService ~ response ~ response:', response)

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
