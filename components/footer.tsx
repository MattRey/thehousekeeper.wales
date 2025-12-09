import { Logo } from "./logo";
import { Social } from "./social";

export function Footer() {
    return (
      <footer className="w-full bg-background border-t border-border font-sans">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border">
            <div>
            <Logo textSize="text-2xl" graphicSize="w-5 h-5" topMargin="mt-4" />
              <p className="text-sm font-light text-muted-foreground">
                Refined hospitality for luxury retreats.
              </p>
            </div>
  
            <div>
              <h4 className="font-light text-sm mb-4 tracking-wide text-primary">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Guest Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Property Care
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-light text-sm mb-4 tracking-wide text-primary">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-light text-sm mb-4 tracking-wide text-primary">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light text-muted-foreground hover:text-primary transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-light text-muted-foreground">
            <p>&copy; 2025 The Housekeeper. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Social />
            </div>
          </div>
        </div>
      </footer>
    )
  }
  