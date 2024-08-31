import { Request, Response, Router } from 'express'
import { upload } from '../uploads/multer'
import { uploadImage } from './factories/uploadImage'
import { uploadValidateMiddleware } from '../middlewares/upload-validation.middleware'
import { confirmMeasure } from './factories/confirmMeasure'
import { confirmMeasureValidateMiddleware } from '../middlewares/confirm-measure-validation.middleware'

export const routes = Router()

routes.post(
  '/upload',
  upload,
  uploadValidateMiddleware,
  async (req: Request, res: Response) => uploadImage.handler(req, res),
)

routes.patch(
  '/confirm',
  confirmMeasureValidateMiddleware,
  async (req: Request, res: Response) => confirmMeasure.handler(req, res),
)
routes.get('/confirm/:customer_code/list', () => {})
