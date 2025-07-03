import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Βιογραφικό</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Κατερίνα Δημητρακοπούλου - Πιστοποιημένη Θεραπεύτρια Παραδοσιακής Κινέζικης Ιατρικής
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <a href="/pdfs/resume-3.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Κατεβάστε το PDF
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/pdfs/resume-3.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Ανοίξτε σε νέα καρτέλα
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="/pdfs/resume-3.pdf"
                className="w-full h-[800px]"
                title="Βιογραφικό Κατερίνα Δημητρακοπούλου"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}