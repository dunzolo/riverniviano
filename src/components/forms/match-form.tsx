"use client";
// #ZOD
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// #REACT
import { useState } from "react";
import { useForm } from "react-hook-form";
// #NEXT
import { useParams, useRouter } from "next/navigation";
// #UI COMPONENTS
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// #SUPABSE
import {
  getMatchesBySquad,
  getSquadsByGroup,
  updateResult,
} from "@/api/supabase";
// #MODEL
import { Match } from "@/models/Match";
import { SquadGroup } from "@/models/SquadGroup";
// #UTILS
import {
  dateFormatItalian,
  timeFormatHoursMinutes,
  updatePoints,
} from "@/utils/utils";

const BUTTON_TEXT_INSERT = "Inserisci";
const BUTTON_TEXT_UPDATE = "Aggiorna";

const formSchema = z.object({
  //utilizzo coerce per validazione su campo input di tipo numerico
  score_home: z.coerce
    .number()
    .min(0, "Non puoi inserrie un valore minore di zero"),
  score_away: z.coerce
    .number()
    .min(0, "Non puoi inserrie un valore minore di zero"),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface MatchFormProps {
  initialData: any;
}

export const MatchForm: React.FC<MatchFormProps> = ({ initialData }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(
    initialData.score_home ? BUTTON_TEXT_UPDATE : BUTTON_TEXT_INSERT
  );

  // faccio il destructuring per evitare di scrivere ogni volta initialData.day, ecc...
  const { day, squad_home, squad_away, score_home, score_away, hour, field } =
    initialData;

  const defaultValues = initialData
    ? initialData
    : {
        score_home: 0,
        score_away: 0,
      };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: ProductFormValues) => {
    const outcome = `${data.score_home} - ${data.score_away}`;

    try {
      setLoading(true);

      // aggiorno il risultato della partita
      await updateResult(
        initialData.id,
        data.score_home,
        data.score_away,
        outcome
      );

      // recupero tutti i match delle due squadre coinvolte
      const matchesBySquadHome: Match = await getMatchesBySquad(squad_home.id);
      const matchesBySquadAway: Match = await getMatchesBySquad(squad_away.id);

      // recupero i dati della classifica del rispettivo girone
      const squadHome: SquadGroup[] = await getSquadsByGroup(
        squad_home.group,
        squad_home.id
      );

      const squadAway: SquadGroup[] = await getSquadsByGroup(
        squad_away.group,
        squad_away.id
      );

      // aggiorno il punteggio della classifica del girone
      // i valori true e false servono per conteggaire correttamente i goal segnati dalle squadre
      updatePoints(matchesBySquadHome, squadHome[0], squad_home.group, true);
      updatePoints(matchesBySquadAway, squadAway[0], squad_away.group, false);

      if (action == BUTTON_TEXT_INSERT) {
        setAction(BUTTON_TEXT_UPDATE);
      }

      toast({
        title: "Risultato inserito!",
        description: "Hai inserito correttamente il risultato.",
        className: "bg-green-700 text-white",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        router.refresh();
      }, 1500);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <Card key={null}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                🗓&nbsp;{dateFormatItalian(day)}&nbsp;|&nbsp;
                {timeFormatHoursMinutes(hour)}
                <p className="text-xs text-muted-foreground pt-1">
                  Categoria:&nbsp;
                  <span className="font-bold">{squad_home.category}</span>
                  &nbsp;-&nbsp;Girone:&nbsp;
                  <span className="font-bold">{squad_home.group}</span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex w-full items-center justify-between space-x-2 mb-3">
                <span>{squad_home.name}</span>
                <FormField
                  control={form.control}
                  name="score_home"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="number" className="w-[5rem]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full items-center justify-between space-x-2 mb-3">
                <span>{squad_away.name}</span>
                <FormField
                  control={form.control}
                  name="score_away"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="number" className="w-[5rem]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={loading} className="w-full" type="submit">
                {action}
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </>
  );
};
