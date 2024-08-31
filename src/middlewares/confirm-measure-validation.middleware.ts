import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

export const confirmMeasureValidateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const requestSchemaConfirmMeasure = z.object({
    confirmed_value: z.number(),
    measure_uuid: z.string().uuid(),
  })

  requestSchemaConfirmMeasure.parse(req.body)

  next()
}
