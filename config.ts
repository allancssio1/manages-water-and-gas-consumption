import env from 'env-var'

export const config = {
  port: env.get('PORT').default(3333).asInt(),
  nodeEnv: env.get('NODE_ENV').default('dev').asString(),
  databaseUrl: env.get('DATABASE_URL').required().asUrlString(),
  geminiAPIKey: env.get('GEMINI_API_KEY').required().asString(),
  googleAPIKey: env.get('GOOGLE_CLOUD_VISION').required().asString(),
}
