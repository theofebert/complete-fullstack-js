// Steps 2.3_L : group of ROUTES
import express from 'express';

// Steps 2.3_M :
const router = express.Router();

// Steps 2.3_N :
router.get('/', (req, res) => {
  res.send({ data: [] });
});

// Steps 2.3_O : export this index.js module to any files needed
export default router;
