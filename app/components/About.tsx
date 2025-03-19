import { Statistics } from "./Statistics";
import Image from "next/image";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12  border-primary">
        <div className="px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Image avec effet et mise en page optimisée */}
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src={pilot}
              alt="Illustration de l'entreprise"
              className="rounded-lg shadow-lg object-cover"
              priority
            />
            <div className="absolute -bottom-4 -right-4 bg-primary p-2 rounded-lg shadow-md">
              <span className="text-white font-semibold text-lg">+2 ans d'expertise</span>
            </div>
          </div>

          {/* Contenu textuel bien structuré */}
          <div className="flex flex-col justify-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#F596D3] via-[#D247BF] to-[#9F3FAA] text-transparent bg-clip-text">  Découvrez{" "}</span>
          
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Notre Histoire
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Depuis notre création, nous nous engageons à fournir des solutions innovantes et performantes pour répondre aux besoins de nos clients.
              Avec une équipe passionnée et une expertise reconnue, nous repoussons les limites de la technologie pour bâtir l'avenir.
            </p>
            <p className="text-lg text-muted-foreground mt-3 leading-relaxed">
              Notre mission est d'apporter des solutions adaptées, efficaces et centrées sur l'utilisateur.
              Grâce à notre approche agile et collaborative, nous transformons vos idées en réalités concrètes.
            </p>

            {/* Statistiques ou autres informations pertinentes */}
            <div className="mt-6">
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
