import { Router } from "express";
import multer from "multer";
import { convertHTMLtoJSON, readFileAndConvertToHTML, sortJsonByDay } from "../controllers/gymController";

export const router = Router();
const upload = multer().single('docxFile')


router.post("/convert", upload, async (req, res) => {
  try {
    const docxFileBuffer = req.file.buffer;
    const rows = await readFileAndConvertToHTML(docxFileBuffer)
    const jsonResult = convertHTMLtoJSON(rows)
    const sortJson = sortJsonByDay(jsonResult)

    res.status(200).send(sortJson);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing file");
  }

});



//conect this to twilio and do it in the same request