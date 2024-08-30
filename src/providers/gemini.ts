import { GoogleGenerativeAI } from '@google/generative-ai'
import { config } from '../../config'

const genAI = new GoogleGenerativeAI(config.geminiAPIKey)

export const gemini = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
