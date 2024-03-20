import {Router} from 'express';
import {getAllController, getOneController, postUserController, updateController, deleteController} from '../controllers/usersController.js';
const router = Router();

router.get('/', getAllController);
router.get('/:id', getOneController);
router.post('/', postUserController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

export default router;