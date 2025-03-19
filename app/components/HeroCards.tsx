import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/app/components/ui/card";
import { Check, Bookmark, NotebookText } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* 📌 Favoris */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Site favori"
              src="https://i.pravatar.cc/150?img=30"
            />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg text-primary">
            <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Site Favori</span>

             </CardTitle>
            <CardDescription>Enregistré récemment</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Ne perdez plus vos liens utiles !</CardContent>
      </Card>

      {/* ✏️ Prise de notes */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <NotebookText size={48} className="text-primary" />
          <CardTitle className="text-center">
          <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Prise de notes</span>


          </CardTitle>
          <CardDescription className="text-primary">Organisez vos idées</CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Gardez vos idées et informations en un seul endroit.</p>
        </CardContent>

        <CardFooter>
       
          <Button className="w-full">  Ajouter une note
          </Button>
        </CardFooter>
      </Card>

      {/* 🏷️ Plan Gratuit */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Gratuit</span>
            <Badge variant="secondary" className="text-sm text-primary">
              Populaire
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">0€</span>
            <span className="text-muted-foreground"> /mois</span>
          </div>

          <CardDescription>Accédez à vos notes et favoris sans limite.</CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Créer un compte</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Site Favoris", "Notes synchronisées", "Accès sécurisé"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* 🌙 Mode sombre */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>
            <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">Mode clair & sombre</span>

             </CardTitle>
            <CardDescription className="text-md mt-2">
              Adaptez l'affichage selon votre préférence.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
