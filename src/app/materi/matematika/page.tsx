import DetailMateri from "@/pages/DetailMateri";

export const metadata = {
  title: "Materi Matematika - Nusa Explorer",
  description: "Pelajari materi Matematika SD lengkap dengan bilangan cacah, pecahan, pola bilangan, dan geometri di Nusa Explorer.",
};

export default function Page() {
  return <DetailMateri initialSubject="MTK" />;
}
