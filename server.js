import 'dotenv/config'

import { PORT } from './config/env.js'
import app from './src/app.js'

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
