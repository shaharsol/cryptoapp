import { Router } from 'express';
import auth from '../middlewares/github-auth';

const router = Router();

router.get('/authorize', auth.authenticate('github', { scope: [ 'user:email' ] }));

export default router;

