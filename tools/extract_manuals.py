import pypdf, os

src = r"C:\Users\jwloy\GitHub\for_bass_clarinet_harp_and_accordion\docs\manuals"
out = os.path.dirname(os.path.abspath(__file__))

for name in ["IRCAM_Solo_Instruments_2_manual.pdf",
             "IRCAM_Prepared_Piano_2_manual.pdf",
             "Xsample_Woodwinds_Bass_Clarinet.pdf"]:
    r = pypdf.PdfReader(os.path.join(src, name))
    txt = "\n".join(f"=== PAGE {i+1} ===\n" + (p.extract_text() or "")
                    for i, p in enumerate(r.pages))
    dest = os.path.join(out, name.replace(".pdf", ".txt"))
    with open(dest, "w", encoding="utf-8") as f:
        f.write(txt)
    print(name, "->", len(r.pages), "pages,", len(txt), "chars")
