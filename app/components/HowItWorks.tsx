import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bookmark, NotebookText, Check, ShieldCheck } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Bookmark size={40} className="text-primary" />,
    title: "Ajoutez vos sites favoris",
    description:
      "Enregistrez facilement vos liens préférés et accédez-y en un clic, où que vous soyez.",
  },
  {
    icon: <NotebookText size={40} className="text-primary" />,
    title: "Prenez des notes",
    description:
      "Ajoutez des notes personnalisées pour chaque site afin de mieux organiser vos recherches.",
  },
  {
    icon: <Check size={40} className="text-primary" />,
    title: "Organisation intelligente",
    description:
      "Classez vos favoris et vos notes avec des tags et une recherche rapide pour tout retrouver facilement.",
  },
  {
    icon: <ShieldCheck size={40} className="text-primary" />,
    title: "Accès sécurisé",
    description:
      "Vos données sont protégées et synchronisées pour une expérience fluide et sécurisée.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
      <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">  Comment{" "}</span>

      
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ça marche ?
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Découvrez comment gérer vos sites favoris et vos notes en toute simplicité.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50 shadow-lg hover:scale-105 transition-transform border-primary">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
            {title}

              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
