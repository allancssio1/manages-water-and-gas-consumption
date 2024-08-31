import { ConfirmMeasure, ConfirmMeasureProps } from '../interfaces/uploadImage'
import { Repository } from '../database/repositories/repository'

export class ConfirmMeasureService implements ConfirmMeasureProps {
  constructor(private readonly repository: Repository) {}

  async handler({
    confirmed_value,
    measure_uuid,
  }: ConfirmMeasure): Promise<any> {
    const measure = await this.repository.findById(measure_uuid)

    if (!measure)
      return {
        error_code: 404,
        error_description: 'Measure não existe',
      }

    if (measure.confirmed)
      return {
        error_code: 400,
        error_description: 'Measure já foi confirmada.',
      }

    await this.repository.confirmMeasure(measure.id)

    return { success: true }
  }
}
