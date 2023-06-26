import mammoth from "mammoth";
import { JSDOM } from "jsdom";
import fs from "fs";
const { promises: fsPromises } = fs

export const readFileAndConvertToHTML = async (docxFileBuffer: any) => {
    const result = await mammoth.convertToHtml({ buffer: docxFileBuffer });
    const txt = `<html><body> ${result.value} </body></html>`;
    const document =  new JSDOM(txt).window.document;
    const rows = document.querySelectorAll("tr");
    return rows
}

export const convertHTMLtoJSON = (rows: NodeListOf<HTMLTableRowElement>) => {
    const jsonResult = {};
    let days = [];

    for (let row of rows) {
      const cells = row.querySelectorAll("td");
      let firstCellText = cells[0].textContent.trim()

      if (firstCellText.includes("DIA")) {
        days = cells.length > 5
               ? [firstCellText, cells[0 + 5].textContent.trim()]
               : [firstCellText];
        continue;
      }

      for (let currentDay of days) { 
        const offset = days.indexOf(currentDay) > 0 ? 5 : 0;
        const json = {
          "ejercicios": cells[0 + offset]?.textContent.trim(),
          "series": cells[1 + offset]?.textContent.trim(),
          "repeticiones": cells[2 + offset]?.textContent.trim(),
        };

        if (jsonResult[currentDay] == null) jsonResult[currentDay] = [];
        firstCellText !== '' && jsonResult[currentDay].push(json);
      }  
    }

    return jsonResult;
}

export const sortJsonByDay = (jsonResult) => {
    let sortJson = {}
      Object.keys(jsonResult).sort().forEach(key => {
        sortJson[key] = jsonResult[key]
      })

      return sortJson
}

