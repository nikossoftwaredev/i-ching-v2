import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { History, Heart, Scale } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-4 leading-relaxed">
            I Ching Balance Way
          </h1>
        </div>

        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Ανακαλύψτε την αρχαία κινεζική σοφία του I Ching και την ολιστική
          προσέγγιση στην υγεία. Εξισορροπήστε το σώμα, το μυαλό και το πνεύμα
          σας μέσω της παραδοσιακής κινέζικης ιατρικής.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="#services">Μάθετε Περισσότερα</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="#appointment">Κλείστε Ραντεβού</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <History className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold text-primary">2,500+</div>
              <h3 className="text-lg font-semibold mb-1">Χρόνια Ιστορίας</h3>
              <p className="text-sm text-muted-foreground">Αρχαία κινεζική σοφία που διδάσκεται από γενιά σε γενιά</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-secondary/10">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <div className="mb-2 text-4xl font-bold text-secondary">Ολιστική</div>
              <h3 className="text-lg font-semibold mb-1">Προσέγγιση Υγείας</h3>
              <p className="text-sm text-muted-foreground">Θεραπεία που αγκαλιάζει σώμα, νου και πνεύμα</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-background/80 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-accent/10">
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <div className="mb-2 text-4xl font-bold text-accent">Ισορροπία</div>
              <h3 className="text-lg font-semibold mb-1">Σώματος & Πνεύματος</h3>
              <p className="text-sm text-muted-foreground">Επαναφορά της αρμονίας στη ζωή σας</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
