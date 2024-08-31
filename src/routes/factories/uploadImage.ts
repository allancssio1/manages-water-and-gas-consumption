import { UploadImageController } from '../../controllers/upload-image.controller'
import { PrismaService } from '../../database/prisma/prisma.service'
import { UploadImageService } from '../../services/upload-image.service'

const repository = new PrismaService()
const service = new UploadImageService(repository)
const controller = new UploadImageController(service)
export const uploadImage = controller
