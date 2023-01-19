import bcrypt from 'bcrypt'
import LocalStrategy from 'passport-local'

import users from '../../presistencia/dao/user/index.js'

export let result = {};
export function configPassport(passport) {
  passport.use(
    new LocalStrategy(async function verify(username, password, cb) {
      const usuario = { email: username, password: password };
      

      const exist = await users.getUsuario(usuario);

      if (exist === null) {
        return cb(null, false);
      } else {
        result = [exist].map((item) => {
          return {
            hash: item.password,
            role: item.role,
            nombre: item.nombre,
            email: item.email,
          };
        });

        if (result) {
          const acceso = await bcrypt.compare(
            usuario.password,
            String(result[0].hash)
          );
          delete result[0].hash;
          
          if (acceso) {
            return cb(null, result);
          } else {
            return cb(null, false);
          }
        } else {
          return cb(null, false);
        }
      }
    })
  );

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { username: user.username });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
}
