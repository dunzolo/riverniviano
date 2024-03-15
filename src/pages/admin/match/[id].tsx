import { getAllDistinctFields, getMatchesById } from "@/api/supabase";
import BreadCrumb from "@/components/Breadcrumb";
import { MatchForm } from "@/components/forms/match-form";
import { SingleMatchForm } from "@/components/forms/single-match-form";
import DashboardLayout from "@/components/layouts/AdminLayout";
import { Match, MatchDatum } from "@/models/Match";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

type Props = {
  match: Match;
  fieldsProps: string[];
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id?.toString();

  try {
    return {
      props: {
        match: id ? await getMatchesById(id) : null,
        fieldsProps: await getAllDistinctFields(),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

MatchPage.getLayout = (MatchPage: any) => (
  <DashboardLayout>{MatchPage}</DashboardLayout>
);

export default function MatchPage({ match, fieldsProps }: Props) {
  const breadcrumbItems = [
    { title: "Match", link: "/admin/match" },
    { title: "Modifica match", link: `/admin/match/${match[0].id}` },
  ];

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <SingleMatchForm
          fieldsData={fieldsProps}
          initialData={match[0]}
          key={match[0].id}
        />
      </div>
    </>
  );
}
