import { Router } from 'express'

import * as Boom from '@hapi/boom'

const router = Router();
router.all("*", (req, res, next) => {
  next(
    Boom.notFound(
      `-2,descripcion:  ruta ${req.url} método ${req.method}  no implementada`
    )
  );
});

export default router;
