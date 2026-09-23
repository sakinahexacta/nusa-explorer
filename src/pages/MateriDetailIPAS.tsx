"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ChapterData {
  chapterNumber: number;
  title: string;
  description: string;
  diagramImage: string;
  stepperTitle: string;
  steps: string[];
  analogyTitle: string;
  analogyText: string;
}

const chaptersData: Record<number, ChapterData> = {
  1: {
    chapterNumber: 1,
    title: "Tumbuhan",
    description:
      "Bagian-bagian dari tumbuhan ada: akar (menyerap air dan nutrisi), batang (menyalurkan makanan dan air), daun (tempat fotosintesis), bunga (alat perkembangbiakan) dan buah (melindungi biji serta menyimpan cadangan makanan). Tumbuhan adalah makhluk hidup yang dapat membuat makanannya sendiri melalui proses yang disebut fotosintesis. Fotosintesis membutuhkan cahaya matahari, klorofil yang ada pada daun, air, dan karbon dioksida. Fotosintesis menghasilkan glukosa yang digunakan untuk makanan tumbuhan dan oksigen yang dilepaskan ke udara.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Tahap - Tahap Fotosintesis",
    steps: [
      "Daun pada tumbuhan menyerap energi cahaya yang dipancarkan oleh matahari.",
      "Klorofil (zat hijau daun) menangkap cahaya matahari tersebut untuk memulai proses fotosintesis.",
      "Akar tumbuhan menyerap air yang tersimpan di dalam tanah. Air ini kemudian disalurkan oleh batang ke seluruh tubuh tumbuhan hingga mencapai daun.",
      "Daun menyerap gas karbon dioksida dari udara.",
      "Proses fotosintesis terjadi di dalam bagian daun bernama kloroplas.",
      "Proses fotosintesis menghasilkan karbohidrat yaitu glukosa yang disalurkan ke seluruh bagian tumbuhan, dan menghasilkan oksigen yang dilepaskan ke udara.",
    ],
    analogyTitle: "Analogi Fotosintesis",
    analogyText:
      "Daun tumbuhan itu bekerja seperti dapur yang sedang mencampurkan bahan adonan: bensin, air dan gas karbon dioksida. Adonan tersebut kemudian dipanggang di dalam wajan hijau (klorofil) menggunakan energi hangat dari kompor cahaya matahari. Setelah matang, terciptalah karbohidrat (kue lezat untuk makanan tumbuhan itu sendiri) dan oksigen (asap segar yang dihembuskan keluar jendela dapur agar bisa kita hirup gratis untuk bernapas).",
  },
  2: {
    chapterNumber: 2,
    title: "Wujud Zat dan Perubahannya",
    description:
      "Zat adalah segala sesuatu yang memiliki massa dan menempati ruang. Materi di sekitar kita memiliki tiga wujud utama: padat, cair, dan gas. Setiap wujud zat memiliki karakteristik bentuk dan volume yang berbeda. Perubahan wujud zat terjadi karena pengaruh pelepasan atau penyerapan energi panas (kalor), seperti mencair, membeku, menguap, mengembun, menyublim, dan mengkristal.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Tahap & Macam Perubahan Wujud Zat",
    steps: [
      "Mencair: Perubahan wujud benda dari padat menjadi cair akibat kenaikan suhu atau penyerapan panas.",
      "Membeku: Perubahan wujud benda dari cair menjadi padat saat suhu diturunkan atau melepaskan panas.",
      "Menguap: Perubahan wujud dari cair menjadi gas ketika air dipanaskan hingga mencapai titik didih.",
      "Mengembun: Perubahan wujud dari gas kembali menjadi cair saat uap air bersentuhan dengan udara dingin.",
      "Menyublim: Perubahan wujud dari padat langsung menjadi gas tanpa melalui fase cair terlebih dahulu.",
      "Mengkristal/Deposisi: Perubahan wujud dari gas langsung menjadi padat ketika melepaskan energi panas.",
    ],
    analogyTitle: "Analogi Wujud Partikel Zat",
    analogyText:
      "Partikel zat padat seperti siswa berbaris rapi saat upacara (rapat dan tidak bisa berpindah tempat). Partikel cair seperti orang-orang yang berjalan santai di lorong sekolah (tetap berdekatan namun bebas bergerak). Sedangkan partikel gas seperti anak-anak yang bebas berlarian di lapangan sepak bola yang luas!",
  },
  3: {
    chapterNumber: 3,
    title: "Gaya di Sekitar Kita",
    description:
      "Gaya adalah tarikan atau dorongan yang diberikan kepada suatu benda sehingga benda tersebut dapat bergerak, berubah arah, berubah bentuk, atau berhenti bergerak. Terdapat berbagai macam gaya yang sering kita manfaatkan dalam kehidupan sehari-hari, antara lain gaya otot, gaya gesek, gaya magnet, gaya pegas, dan gaya gravitasi bumi.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Pengaruh & Jenis-Jenis Gaya",
    steps: [
      "Gaya Otot: Gaya yang dihasilkan oleh kontraksi dan relaksasi otot manusia atau hewan untuk mengangkat atau menarik beban.",
      "Gaya Gesek: Gaya yang berlawanan arah gerak saat dua permukaan benda saling bersentuhan satu sama lain.",
      "Gaya Magnet: Gaya tarik menarik atau tolak menolak yang dihasilkan oleh medan magnet terhadap benda logam tertentu.",
      "Gaya Pegas: Gaya elastis yang terjadi saat benda lentur seperti karet atau per ditarik atau ditekan.",
      "Gaya Gravitasi: Gaya tarik alami bumi yang menyebabkan seluruh benda jatuh ke bawah menuju pusat bumi.",
      "Pengaruh Gaya: Dapat mengubah bentuk benda, menggerakkan benda diam, mempercepat gerak, atau menghentikan benda.",
    ],
    analogyTitle: "Analogi Gaya di Sekitar Kita",
    analogyText:
      "Gaya itu seperti asisten tak terlihat di dunia fisik kita. Tanpa gaya gesek, sepatu kita akan terus tergelincir seperti di atas lantai es. Dan tanpa gaya gravitasi, seluruh barang dan kita sendiri akan melayang-layang ke langit luas!",
  },
  4: {
    chapterNumber: 4,
    title: "Mengubah Bentuk Energi",
    description:
      "Energi adalah kemampuan untuk melakukan kerja atau usaha. Menurut hukum kekekalan energi, energi tidak dapat diciptakan atau dimusnahkan oleh manusia, melainkan hanya dapat diubah dari satu bentuk energi ke bentuk energi lainnya. Proses ini disebut sebagai transformasi energi dan terjadi terus-menerus di alam semesta.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Bentuk & Transformasi Energi",
    steps: [
      "Energi Kimia: Energi tersimpan dalam ikatan molekul seperti makanan yang kita makan atau bahan bakar.",
      "Energi Kinetik (Gerak): Energi yang dimiliki oleh setiap benda yang sedang bergerak di ruang.",
      "Energi Potensial: Energi yang tersimpan karena posisi ketinggian suatu benda atau peregangan elastis.",
      "Energi Listrik: Aliran arus listrik yang sangat fleksibel untuk diubah menjadi panas, cahaya, dan gerak.",
      "Energi Cahaya & Bunyi: Gelombang energi yang merambat di udara sehingga dapat kita lihat dan dengar.",
      "Energi Terbarukan: Memanfaatkan sumber daya tak terbatas seperti sinar matahari, angin, dan aliran air sungai.",
    ],
    analogyTitle: "Analogi Transformasi Energi",
    analogyText:
      "Energi seperti voucher serbaguna yang bisa kita tukarkan ke berbagai hadiah. Makanan yang kita makan adalah voucher energi kimia, kita tukarkan menjadi energi gerak saat berlari, dan saat tubuh kita hangat terbuanglah energi panas!",
  },
  5: {
    chapterNumber: 5,
    title: "Cerita Tentang Daerahku",
    description:
      "Setiap daerah memiliki sejarah, kearifan lokal, dan bentang alam yang mempengaruhi kehidupan warganya. Mempelajari sejarah lokal dan peninggalan kebudayaan membuka wawasan kita tentang perjuangan nenek moyang dalam membangun daerah yang kita tinggali hari ini.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Jejak & Perkembangan Daerah",
    steps: [
      "Mengenal Sejarah Asal-Usul: Cerita rakyat dan bukti sejarah tentang awal mula berdirinya suatu daerah.",
      "Peninggalan Sejarah: Candi, benteng, prasasti, dan naskah kuno yang menjadi saksi bisu peradaban masa lalu.",
      "Bentang Alam & Mata Pencaharian: Dataran tinggi, pesisir pantai, dan lembah yang membentuk profesi masyarakat.",
      "Kearifan Lokal: Nilai moral, tradisi, dan cara bijak masyarakat tradisional dalam menjaga kelestarian alam.",
      "Perubahan Lingkungan: Transformasi daerah dari masa ke masa seiring perkembangan teknologi dan pembangunan.",
      "Pelestarian Warisan Budaya: Peran aktif generasi muda dalam menjaga peninggalan bersejarah agar tidak punah.",
    ],
    analogyTitle: "Analogi Sejarah Daerah",
    analogyText:
      "Daerah kita seperti sebuah album foto keluarga besar yang sangat tebal. Setiap generasi menambahkan halaman ceritanya sendiri, dan tugas kita adalah merawat lembaran lama sambil mengukir kenangan indah di lembaran baru!",
  },
  6: {
    chapterNumber: 6,
    title: "Indonesiaku Kaya Budaya",
    description:
      "Indonesia adalah negara kepulauan terbesar di dunia dengan keberagaman suku bangsa, bahasa daerah, rumah adat, tarian tradisional, senjata tradisional, dan kuliner khas nusantara. Semboyan Bhinneka Tunggal Ika menjadi pilar utama pemersatu persaudaraan seluruh rakyat Indonesia.",
    diagramImage: "/images/bab 1 ipas kelas 4.png",
    stepperTitle: "Ragam Kekayaan Budaya Nusantara",
    steps: [
      "Keberagaman Suku Bangsa: Lebih dari 300 kelompok etnis yang tersebar dari Sabang sampai Merauke.",
      "Rumah Adat Tradisional: Arsitektur unik yang mencerminkan kearifan lokal seperti Rumah Gadang dan Tongkonan.",
      "Pakaian Tradisional: Busana adat dengan corak kain tenun, batik, atau songket untuk upacara adat terhormat.",
      "Kesenian & Tarian Daerah: Tarian dan musik tradisional (seperti gamelan dan angklung) yang memikat dunia.",
      "Kuliner Khas Daerah: Rempah-rempah nusantara yang menghasilkan masakan lezat legendaris nusantara.",
      "Sikap Menghargai Keragaman: Menjunjung tinggi toleransi, persatuan, dan saling menghormati perbedaan suku dan agama.",
    ],
    analogyTitle: "Analogi Bhinneka Tunggal Ika",
    analogyText:
      "Keberagaman Indonesia seperti sebuah taman bunga raksasa. Taman itu tidak hanya diisi oleh satu macam bunga, melainkan beraneka ragam warna, wangi, dan bentuk bunga yang mekar berdampingan sehingga menjadikannya sangat memukau dunia!",
  },
};

export default function MateriDetailIPAS() {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [selectedSubject, setSelectedSubject] = useState<"IPA" | "MTK" | "B.ING">("IPA");

  const currentChapter = chaptersData[activeChapter] || chaptersData[1];

  const handleNextChapter = () => {
    setActiveChapter((prev) => (prev % 6) + 1);
  };

  return (
    <div className="w-full min-h-screen bg-white relative p-0 m-0 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* 1. Global Navbar: Langsung berwarna ungu pekat bg-[#190C38] */}
      <Navbar forceSolid={true} />

      {/* Main Content Area: Padding top minimal mendekati Navbar */}
      <main className="relative flex-1 w-full pt-[74px] sm:pt-[78px] pb-16 sm:pb-24">
        {/* 1. Tab Mata Pelajaran Setengah Oval NEMPEL TOTAL DI TEPI PALING KIRI LAYAR (absolute left-0, py-4 px-8, font-pixel font-bold) */}
        <div className="absolute left-0 top-[140px] sm:top-[150px] md:top-[160px] z-30 flex flex-col gap-4">
          {(["IPA", "MTK", "B.ING"] as const).map((subject) => {
            const isActive = selectedSubject === subject;
            return (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`font-pixel font-bold text-xs sm:text-sm md:text-base py-4 sm:py-5 px-7 sm:px-9 rounded-r-full rounded-l-none transition-all duration-300 shadow-2xl cursor-pointer select-none tracking-wider uppercase text-left ${
                  isActive
                    ? "bg-[#7B2CBF] text-white shadow-[0_4px_24px_rgba(123,44,191,0.7)] scale-105 origin-left"
                    : "bg-white text-[#7B2CBF] border-y-2 border-r-2 border-[#7B2CBF] hover:bg-purple-50 hover:scale-102 origin-left"
                }`}
              >
                {subject}
              </button>
            );
          })}
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-[48px] relative">
          {/* 2. Banner Hero (Top Section) dengan Margin Top Minimal Dekat Navbar */}
          <section className="relative w-full mt-1 sm:mt-2 mb-2 sm:mb-3">
            {/* Hero Banner Container Bersih tanpa border/tepi ungu */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bg ipa.png"
                alt="Banner Hero IPAS"
                className="w-full h-auto object-cover block select-none"
              />
            </div>

            {/* 3. Tombol Panah Ungu Bulat di Kanan: Berada persis di tengah antara tepi kanan gambar hero dan background luar */}
            <button
              onClick={handleNextChapter}
              title="Bab Selanjutnya"
              className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#7B2CBF] hover:bg-[#6c28d9] active:scale-95 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
            </button>
          </section>

          {/* 4. Interactive Chapter Tab Navigator (Folder Tab Mechanism: Inactive behind container, Active elevated in front) */}
          <div className="relative flex items-end justify-start gap-1.5 sm:gap-2.5 md:gap-3 px-5 sm:px-8 md:px-10 -mt-36 sm:-mt-40 md:-mt-44 -mb-1">
            {[1, 2, 3, 4, 5, 6].map((num) => {
              const isActive = activeChapter === num;
              return (
                <button
                  key={num}
                  onClick={() => setActiveChapter(num)}
                  className={`font-poppins font-bold cursor-pointer transition-all duration-300 ease-in-out select-none transform rounded-t-xl sm:rounded-t-2xl rounded-b-none px-6 sm:px-9 md:px-10 pt-3.5 sm:pt-4 md:pt-5 pb-5 sm:pb-6 md:pb-7 text-2xl sm:text-3xl md:text-4xl text-center bg-[#3B1778] shadow-none ${
                    isActive
                      ? "translate-y-0 z-20 text-white"
                      : "translate-y-6 sm:translate-y-7 md:translate-y-8 z-0 text-purple-200/70 hover:text-white hover:translate-y-3 sm:hover:translate-y-4"
                  }`}
                  title={`Bab ${num}`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Container Utama Materi (Gradasi Ungu Vertikal Sesuai 4 Card Homepage & Shadow 2xl Melayang Overlap relative z-10) */}
          <div className="relative z-10 w-full bg-gradient-to-b from-[#3B1778] via-[#2A0D5A] to-[#190C38] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div key={activeChapter} className="animate-slide-up-solid">
              {/* Judul Bab paling atas secara terpisah */}
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-snug">
                {currentChapter.title}
              </h2>

              {/* Layout 2 Kolom Sebaris: Kolom Kiri Teks Rata Kanan-Kiri, Kolom Kanan Gambar Diagram */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                {/* Kolom Kiri: Teks Penjelasan format RATA KANAN-KIRI (text-justify) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <p className="font-poppins text-white/95 text-xs sm:text-[13px] md:text-sm leading-relaxed text-justify font-normal">
                    {currentChapter.description}
                  </p>
                </div>

                {/* Kolom Kanan: Frame Gambar Diagram Bersih */}
                <div className="lg:col-span-5 w-full flex justify-center items-center">
                  <div className="w-full bg-white rounded-2xl p-2.5 sm:p-3 shadow-lg overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentChapter.diagramImage}
                      alt={currentChapter.title}
                      className="w-full h-auto object-contain rounded-xl select-none"
                    />
                  </div>
                </div>
              </div>

              {/* Tahap - Tahap (Langsung mengalir tanpa garis pembatas) */}
              <div className="mt-4">
                <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 tracking-normal leading-snug">
                  {currentChapter.stepperTitle}
                </h3>

                <div className="flex flex-col space-y-3.5 sm:space-y-4 relative">
                  {currentChapter.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 relative group">
                      {/* Garis vertikal stepper antar lingkaran */}
                      {idx < currentChapter.steps.length - 1 && (
                        <div
                          className="absolute left-[15px] sm:left-[17px] top-[28px] sm:top-[32px] w-[2px] h-[calc(100%+6px)] bg-white/70 z-0 pointer-events-none"
                          aria-hidden="true"
                        />
                      )}

                      {/* Nomor Urut Lingkaran Putih */}
                      <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#2A0D5A] font-poppins font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-md">
                        {idx + 1}
                      </div>

                      {/* Horizontal Pill Box dengan Border Putih */}
                      <div className="flex-1 border border-white/90 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-white font-poppins text-xs sm:text-[13px] md:text-sm font-medium leading-relaxed bg-white/5 backdrop-blur-[1px] shadow-sm hover:bg-white/10 transition-colors">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Container Analogi (Warna Ungu Muda & Lebar Sama dengan Container Utama) */}
          <div className="mt-12 sm:mt-16 w-full">
            {/* Header Analogi dengan Icon Bohlam 💡 */}
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
              <span className="text-xl sm:text-2xl">💡</span>
              <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-slate-900 text-center leading-snug">
                {currentChapter.analogyTitle}
              </h3>
              <span className="text-xl sm:text-2xl">💡</span>
            </div>

            {/* Container Card Analogi Berwarna Ungu Muda bg-[#5B2E9D] */}
            <div
              key={`analogy-${activeChapter}`}
              className="w-full bg-[#5B2E9D] text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center animate-slide-up-solid"
            >
              <p className="font-poppins text-xs sm:text-sm md:text-[15px] leading-relaxed text-purple-100 font-normal">
                {currentChapter.analogyText}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* 6. Global Footer (Terpisah & Independen) */}
      <Footer />
    </div>
  );
}
