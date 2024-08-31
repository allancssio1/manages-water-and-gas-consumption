import { Request } from 'express'

export interface Response {
  success: boolean
  status: number
}

export interface ResponseMeasure extends Response {
  data: {
    image_url: string
    measure_value: number
    measure_uuid: string
  }
}

export interface ConfirmMeasure {
  confirmed_value: number
  measure_uuid: string
}

export interface UploadImage {
  handler(req: Request): Promise<ResponseMeasure>
}
export interface ConfirmMeasureProps {
  handler(props: ConfirmMeasure): Promise<ResponseMeasure>
}

export interface ListMeasures {
  handler(customerCode: string): Promise<unknown>
}
