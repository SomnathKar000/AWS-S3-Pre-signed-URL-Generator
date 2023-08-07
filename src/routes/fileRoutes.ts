import { Router } from "express";
import { downloadController } from "../controllers/downloadController";
import { uploadController } from "../controllers/uploadController";

const router = Router();

router.route("/upload").post(uploadController);
router.route("/download").get(downloadController);

export default router;
