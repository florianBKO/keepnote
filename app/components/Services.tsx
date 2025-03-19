import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import cubeLeg from "../assets/cube-leg.png";
import { Bookmark,  NotebookText, Check } from "lucide-react";


import Image from "next/image";
interface ServiceProps {
  title: string;
  description: string;
  icon:  React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Ajoutez vos sites favoris",
    description:
      "Enregistrez facilement vos liens préférés et accédez-y en un clic, où que vous soyez.",
    icon: <Bookmark />, // Remplace par l'icône pertinente ou une autre icône personnalisée
  },
  {
    title: "Prenez des notes",
    description:
      "Ajoutez des notes personnalisées pour chaque site afin de mieux organiser vos recherches et de vous souvenir des informations importantes.",
    icon: <NotebookText />, // Remplace par l'icône pertinente ou une autre icône personnalisée
  },
  {
    title: "Organisation intelligente",
    description:
      "Classez vos favoris et vos notes avec des tags et une recherche rapide pour tout retrouver facilement et efficacement.",
    icon: <Check />, // Remplace par l'icône pertinente ou une autre icône personnalisée
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Nos </span>
  Services
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Découvrez les fonctionnalités qui rendent notre application simple et efficace pour gérer vos favoris et prendre des notes.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="border-primary">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-5xl text-primary">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>
                    {title}
                    </CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={cubeLeg} // Change l'image ici pour correspondre au service ou à l'illustration de ton choix
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Fonctionnalités de gestion des sites favoris"
        />
      </div>
    </section>
  );
};
