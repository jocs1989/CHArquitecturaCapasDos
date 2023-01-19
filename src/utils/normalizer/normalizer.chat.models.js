
import { schema } from 'normalizr'
const user = new schema.Entity('autor')
const responseSchema = new schema.Array(user)
export default responseSchema
