import { PDFService } from "./PDFService";

describe("PDFService", () => {
  let pdfService: PDFService;
  beforeAll(() => {
    pdfService = new PDFService();
  });

  it("should parse an example pdf file correctly", async () => {
    const base64EncodedPdf =
      "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UgovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9XIFswIFs1OTUgNzM4IDYzMSA1NTggNDU4IF0KXQo+PgplbmRvYmoKMTUgMCBvYmoKPDwgL0xlbmd0aCAzOTIgPj4Kc3RyZWFtCi9DSURJbml0IC9Qcm9jU2V0IGZpbmRyZXNvdXJjZSBiZWdpbgoxMiBkaWN0IGJlZ2luCmJlZ2luY21hcAovQ0lEU3lzdGVtSW5mbyA8PCAvUmVnaXN0cnkgKEFkb2JlKSAvT3JkZXJpbmcgKFVDUykgL1N1cHBsZW1lbnQgMCA+PiBkZWYKL0NNYXBOYW1lIC9BZG9iZS1JZGVudGl0eS1VQ1MgZGVmCi9DTWFwVHlwZSAyIGRlZgoxIGJlZ2luY29kZXNwYWNlcmFuZ2UKPDAwMDA+IDxGRkZGPgplbmRjb2Rlc3BhY2VyYW5nZQoyIGJlZ2luYmZyYW5nZQo8MDAwMD4gPDAwMDA+IDwwMDAwPgo8MDAwMT4gPDAwMDQ+IFs8MDA1ND4gPDAwNjU+IDwwMDczPiA8MDA3ND4gXQplbmRiZnJhbmdlCmVuZGNtYXAKQ01hcE5hbWUgY3VycmVudGRpY3QgL0NNYXAgZGVmaW5lcmVzb3VyY2UgcG9wCmVuZAplbmQKZW5kc3RyZWFtCmVuZG9iago3IDAgb2JqCjw8IC9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0RlamFWdVNlcmlmLUJvbGQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzE0IDAgUl0KL1RvVW5pY29kZSAxNSAwIFI+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgClsKNiAwIFIKXQovQ291bnQgMQovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUNdCj4+CmVuZG9iagp4cmVmCjAgMTcKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAxMjAgMDAwMDAgbiAKMDAwMDAwNjA1MSAwMDAwMCBuIAowMDAwMDAwMTY5IDAwMDAwIG4gCjAwMDAwMDAyNjQgMDAwMDAgbiAKMDAwMDAwMDMwMSAwMDAwMCBuIAowMDAwMDA1OTA5IDAwMDAwIG4gCjAwMDAwMDA2MDkgMDAwMDAgbiAKMDAwMDAwMDkxMiAwMDAwMCBuIAowMDAwMDAwNDIzIDAwMDAwIG4gCjAwMDAwMDA1ODkgMDAwMDAgbiAKMDAwMDAwMDkzMSAwMDAwMCBuIAowMDAwMDAxMTk3IDAwMDAwIG4gCjAwMDAwMDUyMzAgMDAwMDAgbiAKMDAwMDAwNTQ2NiAwMDAwMCBuIAowMDAwMDA1MjA5IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTcKL0luZm8gMSAwIFIKL1Jvb3QgMiAwIFIKPj4Kc3RhcnR4cmVmCjYxNDkKJSVFT0YK";
    const pdf = Buffer.from(base64EncodedPdf, "base64");
    const parsedFile = await pdfService.parseFile(pdf);

    expect(parsedFile[0][0]).toBe("Test");
  });
});
