import { Request, Response, NextFunction } from 'express'
import multer from 'multer'

export const upload = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    preservePath: true,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB
    },
    fileFilter: async (req, file, callback) => {
      const mime = ['image/png', 'image/jpeg', 'image/jpg']

      if (!mime.includes(file.mimetype)) {
        return callback(null, false)
      }
      callback(null, true)
    },
  }).single('file')

  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send(err)
    } else if (err) {
      return res.status(500).send(err)
    }

    next()
  })
}
