import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  title: string;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricing: PricingProps = {
  title: "Gratuit et Illimité",
  price: 0,
  description:
    "Profitez d'un accès illimité à toutes les fonctionnalités essentielles, pour les passionnés du développement web.",
  buttonText: "Commencer maintenant",
  benefitList: [
    "Accès illimité aux outils",
    "Aucun frais caché",
    "Support communautaire",
    "Mises à jour régulières",
    "Pas de limite de pages",
    "Accès aux nouvelles fonctionnalités"
  ],
};

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Un accès{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Illimité{" "}
        </span>
        pour les Passionnés
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Un accès totalement gratuit pour les passionnés de développement web
        qui veulent explorer sans limite.
      </h3>

      <div className="grid justify-center">
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {pricing.title}
              <Badge variant="secondary" className="text-sm text-primary">
                Offre spéciale
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">${pricing.price}</span>
              <span className="text-muted-foreground"> / mois</span>
            </div>
            <CardDescription>{pricing.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <Button className="w-full">{pricing.buttonText}</Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter>
            <div className="space-y-4">
              {pricing.benefitList.map((benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
