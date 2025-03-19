import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png", // Utiliser l'URL de l'image du témoignage
    name: "Marie Dupont",
    userName: "@marie_d",
    comment: "La gestion des favoris sur ce site est incroyable ! Je peux garder tous mes sites préférés à portée de main et facilement les organiser.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jean Michel",
    userName: "@jean_michel",
    comment: "La prise de notes est super simple et rapide. J'adore pouvoir ajouter des infos supplémentaires à chaque site.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lucie Moreau",
    userName: "@lucie_moreau",
    comment: "Un excellent outil pour sécuriser mes sites favoris. L'accès est rapide et la sécurité est vraiment rassurante.",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
      <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Découvrez </span>

    
         pourquoi{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          les utilisateurs adorent
        </span>{" "}
        notre 
        <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text"> plateforme</span>

      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Nos utilisateurs nous partagent leurs retours d'expérience sur la gestion de leurs favoris et de leurs notes
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
          <Card key={userName} className="max-w-md overflow-hidden shadow-lg border-primary">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt={name} src={image} />
                <AvatarFallback>UM</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{userName}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm">{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
