import Link from "next/link";
import { CircleIcon } from "@/components/ui/CircleIcon";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  PHONE, 
  ADDRESS, 
  MAIL, 
  BUSINESS_NAME, 
  FACEBOOK_URL, 
  INSTAGRAM_URL, 
  TIKTOK_URL,
  NAVIGATION 
} from "@/lib/general";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              {BUSINESS_NAME}
            </h3>
            <p className="text-sm text-background/80">
              Ολιστική προσέγγιση στην υγεία με βάση την αρχαία κινεζική σοφία. 
              Βρείτε την ισορροπία σας μέσω της παραδοσιακής κινέζικης ιατρικής.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Γρήγοροι Σύνδεσμοι</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#home"
                className="text-sm text-background/80 hover:text-primary transition-colors"
              >
                Αρχική
              </Link>
              <Link
                href="#about"
                className="text-sm text-background/80 hover:text-primary transition-colors"
              >
                Γνωρίστε μας
              </Link>
              <Link
                href="#services"
                className="text-sm text-background/80 hover:text-primary transition-colors"
              >
                Υπηρεσίες
              </Link>
              <Link
                href="#contact"
                className="text-sm text-background/80 hover:text-primary transition-colors"
              >
                Επικοινωνία
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Επικοινωνία</h4>
            <div className="space-y-3">
              <a
                href={NAVIGATION}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <CircleIcon
                  color="#d6b9b6"
                  size={32}
                  icon={<MapPin className="w-4 h-4" />}
                />
                <span>{ADDRESS}</span>
              </a>

              <a
                href={`tel:+30${PHONE}`}
                className="flex items-center gap-3 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <CircleIcon
                  color="#6ca79a"
                  size={32}
                  icon={<Phone className="w-4 h-4" />}
                />
                <span>{PHONE}</span>
              </a>

              <a
                href={`mailto:${MAIL}`}
                className="flex items-center gap-3 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <CircleIcon
                  color="#d6b9b6"
                  size={32}
                  icon={<Mail className="w-4 h-4" />}
                />
                <span className="break-all">{MAIL}</span>
              </a>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ωράριο</h4>
            <div className="flex items-start gap-3 text-sm text-background/80">
              <CircleIcon
                color="#6ca79a"
                size={32}
                icon={<Clock className="w-4 h-4" />}
              />
              <div className="space-y-1">
                <p>Δευτέρα - Παρασκευή</p>
                <p>10:00 - 14:00</p>
                <p>17:00 - 20:00</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Ακολουθήστε μας</h4>
              <div className="flex gap-3">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <CircleIcon
                    color="#1877F2"
                    size={40}
                    icon={<Facebook className="w-5 h-5" />}
                  />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <CircleIcon
                    color="#E4405F"
                    size={40}
                    icon={<Instagram className="w-5 h-5" />}
                  />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="TikTok"
                >
                  <CircleIcon
                    color="#000000"
                    size={40}
                    icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. Όλα τα δικαιώματα κατοχυρωμένα.</p>
        </div>
      </div>
    </footer>
  );
}