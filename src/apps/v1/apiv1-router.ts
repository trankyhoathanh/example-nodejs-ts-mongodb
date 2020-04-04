import { Router } from "express";
const router = Router();
import information from "./information/index";

router.get("/information/insert", information.insert);
router.get("/information/get", information.get);
router.get("/information/find", information.find);
router.get("/information/list", information.list);

export default router;