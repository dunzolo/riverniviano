import { Category, Tournament } from "@/app/types/database";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function TournamentDetail({
  initialTournament,
  initialCategories,
}: {
  initialTournament: Tournament;
  initialCategories: Category[];
}) {
  return (
    <div className="container flex-1 space-y-4 p-4 md:p-8">
      <h1 className="text-center text-2xl font-bold">
        {initialTournament?.name}
      </h1>
      <h3 className="text-center !mt-0">{initialTournament.description}</h3>

      <div className="mt-4">
        <div className="flex justify-center mt-2">
          <Link href={`/copa-crozada-mappa.pdf`} passHref legacyBehavior>
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vai alla mappa del torneo
            </a>
          </Link>
        </div>
      </div>

      {initialCategories?.map((category: Category) => {
        return (
          <div className="mt-4" key={category.id}>
            <Link href={`/${initialTournament.slug}/categories/${category.id}`}>
              <div className="flex items-center gap-4 space-y-1">
                {initialTournament.logo && (
                  <Image
                    src={initialTournament.logo}
                    alt="logo"
                    width={512}
                    height={512}
                    className="w-14 h-14"
                  />
                )}
                <div>
                  <h4 className="text-base font-semibold leading-none">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {category.type}
                  </p>
                </div>
              </div>
            </Link>
            <Separator className="!my-2" />
          </div>
        );
      })}
    </div>
  );
}
