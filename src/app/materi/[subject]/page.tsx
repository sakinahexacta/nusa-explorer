import DetailMateri, { parseSubjectKey } from "@/pages/DetailMateri";

type Props = {
  params: Promise<{ subject: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { subject } = await params;
  const key = parseSubjectKey(subject);
  const titleMap = {
    IPA: "IPAS",
    MTK: "Matematika",
    "B.ING": "Bahasa Inggris",
  };
  return {
    title: `Materi ${titleMap[key]} - Nusa Explorer`,
    description: `Pelajari materi ${titleMap[key]} SD interaktif di Nusa Explorer.`,
  };
}

export default async function Page({ params }: Props) {
  const { subject } = await params;
  return <DetailMateri initialSubject={subject} />;
}
