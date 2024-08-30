import { config } from '../config'
import { app } from './app'

app.listen(config.port, () =>
  console.log(`Runnig on host http://localhost:${config.port}`),
)
