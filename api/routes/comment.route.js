import express from "express"
import {verifyToken} from '../utils/verifyUser.js'
import { createComment } from "../controllers/comment.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";
import { likeComment } from "../controllers/comment.controller.js";
import { editComment } from "../controllers/comment.controller.js";
import {deleteComment} from "../controllers/comment.controller.js"
import { getcomments } from "../controllers/comment.controller.js";
const router = express.Router();

router.post('/create',verifyToken,createComment);
router.get('/getPostComments/:postId',getPostComments);
router.put('/likeComment/:commentId',verifyToken,likeComment);
router.put('/editComment/:commentId',verifyToken,editComment)
router.delete('/deleteComment/:commentId',verifyToken,deleteComment)
router.get('/getcomments',getcomments);



export default router;