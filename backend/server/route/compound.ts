import { auth } from '../auth/middleware.ts';
import * as compoundController from '../controller/compound.ts';
import { Router } from 'express'

const { getCompounds, getCompound, createCompound, updateCompound, deleteCompound } = compoundController
const router = Router();

router.get('/', auth, getCompounds);
router.get('/:id',auth, getCompound);
router.post('/',auth, createCompound);
router.put('/:id',auth, updateCompound);
router.delete('/:id',auth, deleteCompound);

export default router;