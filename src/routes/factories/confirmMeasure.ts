import { ConfirmMeasureController } from '../../controllers/confirm-measure.controller'
import { PrismaService } from '../../database/prisma/prisma.service'
import { ConfirmMeasureService } from '../../services/confirm-measure.service'

const repository = new PrismaService()
const service = new ConfirmMeasureService(repository)
const controller = new ConfirmMeasureController(service)
export const confirmMeasure = controller
