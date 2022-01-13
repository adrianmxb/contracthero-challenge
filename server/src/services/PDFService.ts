import { getDocument } from "pdfjs-dist/legacy/build/pdf";
import { TextItem } from "pdfjs-dist/types/src/display/api";

export class PDFService {
  public async parseFile(fileBuf: Buffer) {
    const content = [];

    const pdf = await getDocument(fileBuf).promise;
    // PDF.js uses 1 as starting index...
    for (let i = 1; i <= pdf.numPages; ++i) {
      const page = await pdf.getPage(i);
      const text = await page.getTextContent();
      // reinterpret item as TextItem, getTextContent has default option
      // includeMarkedContent which defaults to false, thus item can never be TextMarkedContent
      content.push(text.items.map((item) => (item as TextItem).str));
    }
    return content;
  }
}
