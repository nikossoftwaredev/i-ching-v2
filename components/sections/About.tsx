import Image from "next/image";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Γνωρίστε μας</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Η πορεία μας στην εναλλακτική θεραπεία και την αρχαία κινέζικη σοφία
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/doctor.webp"
                alt="Κατερίνα Δημητρακοπούλου"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Κατερίνα Δημητρακοπούλου
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Η ενασχόλησή μου με τις εναλλακτικές θεραπείες ξεκίνησε το 2020, 
                  σε μια περίοδο που ο κόσμος αναζητούσε νέους τρόπους θεραπείας και 
                  ευεξίας.
                </p>
                <p>
                  Κατά τη διάρκεια της πανδημίας, ανακάλυψα την κινέζικη ιατρική και 
                  συνειδητοποίησα τη βαθιά σύνδεση μεταξύ σώματος, μυαλού και πνεύματος. 
                  Αυτή η αποκάλυψη με οδήγησε να εμβαθύνω στην αρχαία σοφία του I Ching.
                </p>
                <p>
                  Το <strong>I Ching Balance Way</strong> δημιουργήθηκε με σκοπό να 
                  μοιραστώ αυτή τη γνώση και να βοηθήσω τους ανθρώπους να βρουν την 
                  ισορροπία στη ζωή τους μέσω της ολιστικής ιατρικής.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/images/holistic.jpg"
                alt="Ολιστική προσέγγιση"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-secondary">
                Τι είναι το I Ching;
              </h4>
              <p className="text-foreground/80">
                Το I Ching, γνωστό ως &ldquo;Βιβλίο των Αλλαγών&rdquo;, είναι ένα αρχαίο κινέζικο 
                κείμενο που εστιάζει στην ισορροπία και την &ldquo;ελλειπτική κίνηση της ζωής&rdquo;. 
                Διδάσκει πώς όλα στο σύμπαν είναι αλληλένδετα και σε συνεχή κίνηση.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-accent">
                Η Φιλοσοφία μας
              </h4>
              <p className="text-foreground/80">
                Πιστεύουμε στην ολιστική προσέγγιση της υγείας, όπου η θεραπεία δεν 
                αφορά μόνο τα συμπτώματα αλλά την αποκατάσταση της ισορροπίας σε όλα 
                τα επίπεδα της ύπαρξης.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                2,500 Χρόνια Ιστορίας
              </h4>
              <p className="text-foreground/80">
                Η κινέζικη ιατρική έχει μια ιστορία 2,500 ετών, βαθιά συνδεδεμένη με 
                πολιτιστικές και φιλοσοφικές προοπτικές που προσφέρουν μια μοναδική 
                ματιά στην υγεία και την ευεξία.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}