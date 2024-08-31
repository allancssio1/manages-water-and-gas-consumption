import { Repository } from '../database/repositories/repository'
import { ListMeasures } from '../interfaces/uploadImage'

export class ListMiasureService implements ListMeasures {
  constructor(private readonly repository: Repository) {}
  async handler(customerCode: string): Promise<unknown> {
    const measuers = await this.repository.find(customerCode)

    return {
      success: true,
      status: 200,
      data: {
        image_url: '',
        measure_uuid: '',
        measure_value: 0,
      },
    }
  }
}
