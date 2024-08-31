import { NextFunction, Request, Response } from 'express'
import sharp from 'sharp'
import { z } from 'zod'

export const uploadValidateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const requestSchemaUpload = z.object({
    body: z.object({
      customer_code: z.string(),
      measure_datetime: z.string().transform((str) => new Date(str)),
      measure_type: z
        .enum(['WATER', 'GAS'])
        .describe("O campo 'measure_type' precisa possuir 'WATER' ou 'GAS"),
    }),
    file: z.object({
      buffer: z.custom<Buffer>((val) => {
        try {
          sharp(val).metadata() // Tenta obter os metadados da imagem
          return true
        } catch (error) {
          return false
        }
      }),
      fieldname: z.string(),
      originalname: z.string(),
      encoding: z.string(),
      mimetype: z.string(),
      size: z.number(),
    }),
  })

  requestSchemaUpload.parse(req)

  next()
}
