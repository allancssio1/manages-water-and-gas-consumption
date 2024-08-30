import { UploadImageController } from '../../controllers/upload-image.controller'
import { UploadImageService } from '../../services/upload-image.service'

const service = new UploadImageService()
const controller = new UploadImageController(service)
export const uploadImage = controller
