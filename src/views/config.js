import exphbs from 'express-handlebars'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function managerViews (app) {
  app.set('views', __dirname) // directorio donde estan los archivos de plantillas
  app.engine(
    '.hbs',
    exphbs.engine({
      extname: '.hbs',
      defaultLayout: __dirname + '/layouts/index.hbs',
      layoutsDir: __dirname + '/layouts/',
      partialsDir: __dirname + '/partials/'
    })
  )
  app.set('view engine', '.hbs') // motor de plantillas a utilizar
}
export default managerViews
