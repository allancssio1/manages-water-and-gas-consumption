import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { routes } from './routes'
import { AppErrors } from './errors/app-errors'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'
import cors from 'cors'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, _: Request, response: Response, next: NextFunction) => {
  if (err) {
    if (err instanceof ZodError) {
      return response.status(400).send({
        message: fromZodError(err),
      })
    }

    if (err instanceof AppErrors)
      return response.status(err.code).json({ message: err.message })

    return response
      .status(500)
      .json({ message: `Internal server error - ${err.message}` })
  } else {
    next()
  }
})
