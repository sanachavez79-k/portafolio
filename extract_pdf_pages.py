import os
import sys

# Add the local libs folder to sys.path to load PyMuPDF (fitz)
sys.path.insert(0, os.path.abspath('/Users/sanakamiya/Portafolio/libs'))
import fitz

def extract_pdf():
    pdf_path = "/Users/sanakamiya/Portafolio/Sana Kamiya Taller de Raster_compressed.pdf"
    output_dir = "/Users/sanakamiya/Portafolio/images"
    os.makedirs(output_dir, exist_ok=True)
    
    doc = fitz.open(pdf_path)
    print(f"Total pages to extract: {len(doc)}")
    
    # Render at 2x zoom for high-DPI screens and legibility
    zoom = 2.0
    mat = fitz.Matrix(zoom, zoom)
    
    for i, page in enumerate(doc):
        pix = page.get_pixmap(matrix=mat)
        output_file = os.path.join(output_dir, f"slide_{i+1:02d}.png")
        pix.save(output_file)
        print(f"Saved: {output_file}")
        
    print("All slides extracted successfully!")

if __name__ == "__main__":
    extract_pdf()
