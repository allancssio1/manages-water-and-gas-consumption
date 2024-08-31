import { Request } from 'express'

export interface Response {
  success: boolean
  status: number
}

export interface ResponseUploadImage extends Response {
  data: {
    image_url: string
    measure_value: number
    measure_uuid: string
  }
}

export interface UploadImage {
  handler(req: Request): Promise<ResponseUploadImage>
}

export interface ListMeasures {
  handler(customerCode: string): Promise<unknown>
}
