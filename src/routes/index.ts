import { Request, Response, Router } from 'express'
import { upload } from '../uploads/multer'
import { uploadImage } from './factories/uploadImage'
import { uploadValidateMiddleware } from '../middlewares/upload-validation.middleware'

export const routes = Router()

routes.post(
  '/upload',
  upload,
  uploadValidateMiddleware,
  async (req: Request, res: Response) => uploadImage.handler(req, res),
)

routes.patch('/confirm', () => {})
routes.get('/confirm/:customer_code/list', () => {})
