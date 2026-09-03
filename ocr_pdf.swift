import Foundation
import PDFKit
import Vision
import AppKit

guard CommandLine.arguments.count > 1 else {
    print("Usage: ocr_pdf <pdf-path>")
    exit(1)
}

let pdfPath = CommandLine.arguments[1]
let url = URL(fileURLWithPath: pdfPath)

guard let doc = PDFDocument(url: url) else {
    print("Could not open PDF at \(pdfPath)")
    exit(1)
}

print("PDF opened. Total pages: \(doc.pageCount)")

for i in 0..<doc.pageCount {
    print("\n--- PAGE \(i + 1) ---")
    guard let page = doc.page(at: i) else { continue }
    
    // Render page as NSImage at 150 DPI for high-quality text extraction
    let bounds = page.bounds(for: .mediaBox)
    let scale: CGFloat = 150.0 / 72.0
    let size = CGSize(width: bounds.width * scale, height: bounds.height * scale)
    
    let image = NSImage(size: size)
    image.lockFocus()
    if let context = NSGraphicsContext.current?.cgContext {
        context.scaleBy(x: scale, y: scale)
        context.translateBy(x: -bounds.origin.x, y: -bounds.origin.y)
        page.draw(with: .mediaBox, to: context)
    }
    image.unlockFocus()
    
    guard let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("Could not create CGImage for page \(i + 1)")
        continue
    }
    
    // Perform text recognition
    let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
    let request = VNRecognizeTextRequest { (request, error) in
        if let error = error {
            print("OCR Error: \(error.localizedDescription)")
            return
        }
        guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
        for observation in observations {
            guard let topCandidate = observation.topCandidates(1).first else { continue }
            print(topCandidate.string)
        }
    }
    
    request.recognitionLevel = .accurate
    // Support Spanish, Catalan, English and Japanese OCR
    request.recognitionLanguages = ["es", "ca", "en", "ja"]
    
    do {
        try requestHandler.perform([request])
    } catch {
        print("Failed to perform OCR: \(error)")
    }
}
