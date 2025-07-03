import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleIcon } from "@/components/ui/CircleIcon";
import { Activity, Heart, Scale } from "lucide-react";

const services = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Βελονισμός",
    description: "Balance method & Ηλεκτροβελονισμός",
    image: "/images/services/acupuncture.webp",
    details: [
      "Μέθοδος ισορροπίας για ανακούφιση πόνου",
      "Ηλεκτροβελονισμός για χρόνιες παθήσεις",
      "Εξατομικευμένη θεραπεία",
    ],
    color: "#d6b9b6",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Μασάζ",
    description: "Cupping & Moxibustion",
    image: "/images/services/cupping.webp",
    altImage: "/images/services/moxibustion.webp",
    details: [
      "Θεραπευτικές βεντούζες (Cupping)",
      "Μοξοθεραπεία για ενέργεια",
      "Χαλαρωτικό και θεραπευτικό μασάζ",
    ],
    color: "#6ca79a",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Ρύθμιση Βάρους",
    description: "Διατροφή & Θεραπείες",
    image: "/images/services/diet.webp",
    details: [
      "Εξατομικευμένο πρόγραμμα διατροφής",
      "Μασάζ για κυτταρίτιδα",
      "Ολιστική προσέγγιση απώλειας βάρους",
    ],
    color: "#d6b9b6",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Υπηρεσίες</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ολοκληρωμένες θεραπείες βασισμένες στην παραδοσιακή κινέζικη ιατρική
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <CircleIcon
                    color={service.color}
                    size={56}
                    icon={service.icon}
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
            <p className="text-lg font-medium mb-2">
              Όλες οι θεραπείες προσαρμόζονται στις ατομικές σας ανάγκες
            </p>
            <p className="text-muted-foreground">
              Επικοινωνήστε μαζί μας για να σχεδιάσουμε το δικό σας πρόγραμμα θεραπείας
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}