import { GoogleAIFileManager } from '@google/generative-ai/server'
import { config } from '../../config'

export const fileManager = new GoogleAIFileManager(config.geminiAPIKey)
