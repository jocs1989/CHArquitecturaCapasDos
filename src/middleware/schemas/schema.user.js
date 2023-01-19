import Joi from 'joi'

const schemaUser = Joi.object({
  nombre: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
  timestamp: Date.now
})
const schemaUserLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()

})

const schemaUserResponse = Joi.object({
  nombre: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
  email: Joi.string().email().required(),
  role: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
  timestamp: Date.now
})

export async function validateUserResponse (object) {
  try {
    console.log(object)
    const { error, value } = schemaUserResponse.validate(object)
    console.log(value)
    if (error) {
      console.log(error)
      // next(error)
      throw new Error(error)
    }
    return value
  } catch (err) {
    throw new Error('Algo paso')
    next(err)
  }
}
export function validateUser () {
  return async (res, req, next) => {
    try {
      const { error, value } = schemaUser.validate({
        nombre: res.body.nombre,
        email: res.body.email,
        password: res.body.password,
        role: res.body.role
      })

      if (error) {
        console.log(error)
        // next(error)
        throw new Error(error)
      } else {
        next()
      }
    } catch (err) {
      throw new Error('Algo paso')
      next(err)
    }
  }
}
export function validateUserLogin () {
  return async (res, req, next) => {
    try {
      const { error, value } = schemaUserLogin.validate({
        email: res.body.username,
        password: res.body.password
      })

      if (error) {
        console.log(error)
        // next(error)
        throw new Error(error)
      } else {
        next()
      }
    } catch (err) {
      throw new Error('Algo paso')
      next(err)
    }
  }
}
