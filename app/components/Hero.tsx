import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text">
              Organisez
            </span>{" "}
            vos ressources en ligne
          </h1>{" "}
          et{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">
              prenez des notes
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Gardez une trace de vos sites favoris et écrivez des notes
          importantes en un seul endroit.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
  <Button asChild className="w-full md:w-1/3 flex items-center justify-center gap-2">
    <a rel="noreferrer noopener" href="/notes">
       Commencer l'aventure 🥳
    </a>
  </Button>
</div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
