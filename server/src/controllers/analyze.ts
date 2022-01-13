import { Router } from "express";
import multer from "multer";
import { PDFService } from "../services/PDFService";


export default () => {
    const router = Router();
    const upload = multer();

    const pdfService = new PDFService();

    router.post("/", upload.single('file'), async (req, res) => {
        if(!req.file) {
            return res.send(400).send("no valid file uploaded");
        }

        const parsedText = await pdfService.parseFile(req.file.buffer);
        res.send({
            parsedContent: parsedText,
        });
    });

    return router;
}