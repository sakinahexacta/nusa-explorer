"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, DoorOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "katex/dist/katex.min.css";
import katex from "katex";
import Footer from "@/components/Footer";
import AnalogiPizza from "@/components/AnalogiPizza";
import SimulatorDiskon from "@/components/SimulatorDiskon";
import SimulatorSkala from "@/components/SimulatorSkala";
import SimulatorTangga from "@/components/SimulatorTangga";

export interface ChapterData {
  chapterNumber?: number;
  title?: string;
  description?: string;
  diagramImage?: string;
  stepperTitle?: string;
  steps?: string[];
  vocabularyTable?: { english: string; indonesian: string }[];
  formulaText?: string[];
  stepperTitle2?: string;
  stepperDescription2?: string;
  exampleQuestion?: string;
  exampleSolutionSteps?: string[];
  analogyTitle?: string;
  analogyText?: string;
}

/**
 * Helper parser to clean and format narrative description text:
 * Converts LaTeX fractions like "$\frac{10}{100}$" or "\frac{10}{100}" into clean readable format "10/100"
 * and removes stray LaTeX delimiters so reading text is always clean, friendly, and legible.
 */
export function formatDescription(text?: string | null): string {
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/\$(\\frac\{[^}]+\}\{[^}]+\})\$/g, "$1")
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2")
    .replace(/\$(\d+)\/(\d+)\$/g, "$1/$2")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\\times/g, "×")
    .replace(/\\text\{([^}]+)\}/g, "$1");
}

export function MathRenderer({
  content,
  className = "",
}: {
  content?: string | null;
  className?: string;
}) {
  if (!content || typeof content !== "string") return null;

  const renderFormula = (formula: string, key: string | number) => {
    try {
      let processedFormula = formula;
      // Auto-wrap words with spaces inside \frac numerator and denominator into \text{...}
      if (processedFormula.includes("\\frac") && !processedFormula.includes("\\text")) {
        processedFormula = processedFormula.replace(
          /\\frac\{([^}]+)\}\{([^}]+)\}/g,
          (_match, num, den) => {
            const cleanNum = num.trim().includes(" ") ? `\\text{${num.trim()}}` : num;
            const cleanDen = den.trim().includes(" ") ? `\\text{${den.trim()}}` : den;
            return `\\frac{${cleanNum}}{${cleanDen}}`;
          }
        );
      }

      const html = katex.renderToString(processedFormula, {
        displayMode: false,
        throwOnError: false,
      });
      return (
        <span
          key={key}
          className="inline-math inline-flex items-center justify-center align-middle mx-1 font-semibold text-white"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <span key={key}>{formula}</span>;
    }
  };

  // If text has inline LaTeX delimiters $...$, parse and render formulas
  if (content.includes("$")) {
    const parts = content.split(/(\$[^$]+\$)/g);
    return (
      <span className={className}>
        {parts.map((part, idx) => {
          if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
            return renderFormula(part.slice(1, -1), idx);
          }
          if (part.includes("\\frac") || part.includes("\\times")) {
            return renderFormula(part.replace(/^\$/, ""), idx);
          }
          return <span key={idx}>{part}</span>;
        })}
      </span>
    );
  }

  // If text contains raw \frac without $ delimiters
  if (content.includes("\\frac")) {
    if (content.includes("=")) {
      const equalIdx = content.indexOf("=");
      const leftPart = content.slice(0, equalIdx + 1);
      const rightPart = content.slice(equalIdx + 1).trim();
      return (
        <span className={className}>
          <span>{leftPart} </span>
          {renderFormula(rightPart, "formula")}
        </span>
      );
    }
    return renderFormula(content, "formula");
  }

  return <span className={className}>{content}</span>;
}

export type SubjectKey = "IPA" | "MTK" | "B.ING";

export const ipasChaptersData: Record<number, ChapterData> = {
  1: {
    chapterNumber: 1,
    title: "Harmoni dalam Ekosistem",
    description:
      "Ekosistem adalah kesatuan hubungan timbal balik antara makhluk hidup (komponen biotik) dengan lingkungan sekitarnya yang tidak hidup (komponen abiotik), seperti tanah, air, udara, dan sinar matahari. Di dalam sebuah ekosistem, setiap makhluk hidup membutuhkan energi untuk bertahan hidup, bertumbuh, dan berkembang biak. Energi utama di bumi berasal dari matahari, yang kemudian dialirkan melalui peristiwa makan dan dimakan yang disebut rantai makanan.",
    diagramImage: "/images/ipas 1.png",
    stepperTitle: "Tingkatan Trofik (Peran Makhluk Hidup)",
    steps: [
      "Produsen: Makhluk hidup berklorofil yang mampu memproduksi makanannya sendiri melalui fotosintesis, seperti padi, rumput, dan alga. Produsen tidak memangsa makhluk lain.",
      "Konsumen Tingkat I (Herbivora/Omnivora): Hewan yang memakan produsen secara langsung. Contoh di ekosistem sawah adalah belalang, tikus, ulat daun, dan burung pipit.",
      "Konsumen Tingkat II (Karnivora/Omnivora): Hewan yang memangsa konsumen tingkat pertama. Contohnya katak sawah yang memakan belalang, atau ular yang memakan tikus.",
      "Konsumen Tingkat III / Puncak: Predator tingkat atas yang jarang dimangsa oleh hewan lain selama masih hidup, contohnya burung elang atau harimau.",
      "Dekomposer (Pengurai): Organisme yang menguraikan bangkai hewan, kotoran, dan sisa tumbuhan yang telah mati menjadi zat hara penyubur tanah, seperti jamur dan bakteri pengurai.",
    ],
    stepperTitle2: "Keseimbangan Ekosistem Sawah",
    stepperDescription2:
      "Keseimbangan ekosistem terjadi jika populasi produsen lebih banyak daripada konsumen tingkat satu, konsumen tingkat satu lebih banyak dari konsumen tingkat dua, dan seterusnya (piramida makanan). Jika salah satu rantai terputus, misalnya ular sawah diburu habis oleh manusia, maka populasi tikus akan melonjak drastis tanpa kendali. Akibatnya, tanaman padi milik petani habis dirusak oleh hama tikus dan terjadi gagal panen.",
    analogyTitle: "Analogi Rantai Makanan",
    analogyText:
      "Rantai makanan ibarat deretan kartu domino yang berdiri berjejer. Jika salah satu kartu di tengah diambil (misalnya predator alami hilang), alur jatuhnya domino akan terganggu dan seluruh barisan bisa runtuh berantakan.",
  },
  2: {
    chapterNumber: 2,
    title: "Sistem Pencernaan Khusus Hewan Pemamah Biak (Ruminansia)",
    description:
      "Hewan ruminansia adalah kelompok hewan mamalia pemakan tumbuhan (herbivora) yang mengunyah makanannya sebanyak dua kali. Contoh hewan ini adalah sapi, kerbau, kambing, dan domba. Makanan utama mereka berupa rumput dan dedaunan yang mengandung serat kasar bernama selulosa, yaitu zat yang sangat keras dan sulit dicerna oleh lambung hewan biasa maupun manusia. Oleh karena itu, ruminansia dibekali susunan gigi khusus serta lambung bersekat empat.",
    diagramImage: "/images/ipas 2.png",
    stepperTitle: "Anatomi dan Alur 4 Bagian Lambung Sapi",
    steps: [
      "Rumen (Perut Besar): Tempat pertama masuknya rumput setelah ditelan lewat kerongkongan. Di sini terjadi proses fermentasi serat selulosa dengan bantuan jutaan mikroba (bakteri dan protozoa).",
      "Retikulum (Perut Jala): Makanan diaduk dan dibentuk menjadi gumpalan-gumpalan padat (bolus). Saat sapi beristirahat, gumpalan ini didorong kembali ke dalam mulut untuk dikunyah ulang sampai halus.",
      "Omasum (Perut Buku): Makanan yang sudah dikunyah kedua kalinya masuk ke bagian ini. Permukaannya berlipat-lipat seperti lembaran buku, berfungsi menyerap kelebihan air serta menggiling makanan secara mekanik.",
      "Abomasum (Perut Masam): Inilah bagian lambung sesungguhnya yang fungsinya serupa dengan lambung manusia. Di sini terjadi pencernaan kimiawi menggunakan asam klorida (HCl) dan enzim pencernaan (pepsin) untuk memecah protein dan membunuh bakteri jahat sebelum nutrisi diserap di usus halus.",
    ],
    analogyTitle: "Analogi Proses Makan Sapi",
    analogyText:
      "Proses makan sapi seperti mencuci pakaian yang sangat kotor: pertama direndam detergen di ember besar (rumen), diperas dan disikat ulang di papan kucek (retikulum & mulut), dibilas airnya (omasum), lalu disterilkan dengan pemutih (abomasum).",
  },
  3: {
    chapterNumber: 3,
    title: "Bagian Bunga dan Penyerbukan Tumbuhan",
    description:
      "Bunga merupakan organ perkembangbiakan generatif (kawin) pada tumbuhan biji tertutup. Bunga sempurna memiliki bagian steril dan bagian fertil. Penyerbukan adalah peristiwa jatuhnya serbuk sari dari kepala sari ke atas kepala putik. Penyerbukan dapat dibantu oleh angin (anemogami), air (hidrogami), maupun hewan perantara seperti lebah, kupu-kupu, dan kumbang (zooidiogami). Setelah serbuk sari menempel di kepala putik, serbuk sari akan membentuk buluh serbuk menuju bakal biji untuk membuahi sel telur. Pembuahan ini akan menghasilkan zigot yang berkembang menjadi biji dan daging buah.",
    diagramImage: "/images/ipas 3.png",
    stepperTitle: "Struktur Anatomi Bunga Sempurna",
    steps: [
      "Tangkai Bunga: Penopang bunga dan penghubung ranting dengan dasar bunga.",
      "Kelopak Bunga (Calix): Daun pelindung di bagian luar yang menjaga kuncup bunga sebelum mekar sempurna.",
      "Mahkota Bunga (Corolla): Helai bunga berwarna-warni yang mencolok dan harum. Fungsinya memikat serangga, burung, atau kelelawar agar mendekat.",
      "Benang Sari (Stamen): Alat kelamin jantan pada bunga, terdiri dari tangkai sari dan kepala sari yang menghasilkan serbuk sari (polen).",
      "Putik (Pistillum): Alat kelamin betina pada bunga, terletak di bagian tengah, terdiri dari kepala putik, tangkai putik, dan bakal biji (ovarium).",
    ],
    analogyTitle: "Analogi Mahkota Bunga",
    analogyText:
      "Mahkota bunga ibarat papan reklame warna-warni dari sebuah restoran. Serangga datang untuk menikmati nektar manis, tanpa sengaja kakinya membawa serbuk sari jantan dan menempelkannya ke putik betina.",
  },
  4: {
    chapterNumber: 4,
    title: "Siklus Hidrologi (Air) dan Konservasi Tanah",
    description:
      "Siklus Hidrologi (Daur Air) adalah proses sirkulasi air secara berkelanjutan dari bumi ke atmosfer dan kembali lagi ke bumi yang digerakkan oleh energi panas matahari dan gravitasi. Karena proses ini berlangsung secara berulang dan terus-menerus, jumlah total air di permukaan bumi relatif tetap, meskipun wujud dan lokasinya selalu berubah.",
    diagramImage: "/images/ipas 4.png",
    stepperTitle: "Tahapan Daur Air di Bumi",
    steps: [
      "Evaporasi & Transpirasi: Panas matahari menguapkan air dari danau, sungai, dan laut (evaporasi), serta air dari pori-pori daun tumbuhan (transpirasi).",
      "Kondensasi: Uap air membubung tinggi ke atmosfer yang bersuhu dingin, lalu memadat menjadi partikel es dan tetesan air kecil yang membentuk gumpalan awan mendung.",
      "Presipitasi: Awan yang sudah terlalu berat menampung uap air akan melepaskan muatannya sebagai hujan, salju, atau hujan es ke permukaan bumi.",
      "Infiltrasi & Perkolasi: Air hujan yang jatuh ke daratan sebagian mengalir di permukaan (run-off), dan sebagian besar meresap ke dalam pori-pori tanah melalui akar-akar pohon menjadi cadangan air tanah bersih.",
    ],
    analogyTitle: "Analogi Siklus Air",
    analogyText:
      "Siklus air mirip seperti merebus air di dalam panci tertutup. Air yang menguap ke tutup panci akan mengembun dan menetes kembali ke bawah. Jumlah air di dalam panci tidak pernah berkurang, hanya berubah wujudnya saja.",
  },
};

export const matematikaChaptersData: Record<number, ChapterData> = {
  1: {
    chapterNumber: 1,
    title: "Operasi Hitung Penjumlahan dan Pengurangan Pecahan",
    description:
      "Pecahan menyatakan bagian dari suatu bilangan utuh. Dua pecahan tidak dapat langsung dijumlahkan atau dikurangkan jika nilai penyebutnya (angka di bawah garis) belum sama. Untuk menyamakannya, kita harus mencari KPK (Kelipatan Persekutuan Terkecil) dari kedua bilangan penyebut tersebut.",
    diagramImage: "/images/mtk 1.png",
    stepperTitle: "Langkah-Langkah Menghitung",
    steps: [
      "Tentukan KPK dari penyebut-penyebutnya.",
      "Kalikan pembilang dengan faktor pengali penyebut agar nilainya setara (pecahan senilai).",
      "Jumlahkan atau kurangkan angka pembilangnya saja, sedangkan penyebutnya tetap.",
      "Jika pembilang lebih besar dari penyebut, ubah menjadi bentuk pecahan campuran.",
    ],
    stepperTitle2: "Contoh Soal Perhitungan",
    exampleQuestion:
      "Seorang pembeli mencampurkan $\\frac{1}{2}$ Kg tepung terigu dengan $\\frac{3}{4}$ Kg tepung beras:",
    exampleSolutionSteps: [
      "Penyebut adalah $2$ dan $4$. KPK dari $2$ dan $4$ adalah $4$.",
      "Ubah pecahan pertama: $\\frac{1}{2} = \\frac{1 x 2}{2 x 2} = \\frac{2}{4}$",
      "Operasikan penjumlahan: $\\frac{2}{4} + \\frac{3}{4} = \\frac{2 + 3}{4} = \\frac{5}{4}\\text{ Kg}$",
      "Ubah ke pecahan campuran: $\\frac{5}{4} = 1\\frac{1}{4}\\text{ Kg}$",
    ],
    analogyTitle: "Analogi Potongan Pizza",
    analogyText:
      "Bayangkan kamu punya 1 dari 2 potong pizza besar (1/2) dan temanmu punya 3 dari 4 potong pizza kecil (3/4). Ukuran potongannya beda, jadi kamu tidak bisa bilang kalian punya '4 potong' yang seukuran. \n Supaya potongannya seukuran, potongan besarmu (1/2) kamu potong lagi jadi dua sehingga menjadi 2 dari 4 potong kecil (2/4). Sekarang karena ukuran potongannya sudah sama-sama per-4, baru deh bisa dijumlahkan! (2/4 + 3/4 = 5/4).",
  },
  2: {
    chapterNumber: 2,
    title: "Perhitungan Nilai Persentase dan Potongan Harga (Diskon)",
    description:
      "Persen dilambangkan dengan tanda % yang berarti perseratus. Angka 10% artinya 10/100 atau 0,10. Dalam dunia jual beli sehari-hari, persen paling sering digunakan untuk menghitung potongan harga (diskon), pajak barang, atau komisi keuntungan.",
    diagramImage: "/images/mtk 2.png",
    stepperTitle: "Rumus Menghitung Diskon",
    formulaText: [
      "Besar Potongan (Diskon) = Presentase Diskon × Harga Asli",
      "Uang yang Wajib Dibayar = Harga Asli - Besar Potongan",
    ],
    stepperTitle2: "Contoh Soal Perhitungan",
    exampleQuestion:
      "Harga sekeranjang apel segar tertulis Rp50.000. Toko sedang merayakan hari kemerdekaan dan memberikan diskon sebesar 10%. Berapa uang yang wajib dibayar?",
    exampleSolutionSteps: [
      "Hitung potongan diskon: $10\\% \\times \\text{Rp}50.000 = \\frac{10}{100} \\times 50.000 = \\text{Rp}5.000$",
      "Hitung uang yang harus dibayar: $\\text{Rp}50.000 - \\text{Rp}5.000 = \\text{Rp}45.000$",
    ],
    analogyTitle: "Simulator Diskon Belanja Interaktif",
    analogyText:
      "Diskon seperti toko memberikan potongan sebagian dari harga barang belanjaanmu. Semakin besar persentase diskon yang kamu dapatkan, semakin murah uang yang perlu kamu bayar ke kasir!",
  },
  3: {
    chapterNumber: 3,
    title: "Perbandingan Skala pada Denah Lingkungan",
    description:
      "Skala adalah angka perbandingan antara jarak pada gambar/peta/denah dengan jarak nyata yang sebenarnya di lapangan. Skala biasanya dituliskan dalam format 1 : n dalam satuan centimeter (cm).\n Contoh: Skala 1 : 1.000 artinya setiap 1 cm pada kertas denah mewakili 1.000 cm (atau 10 meter) jarak sebenarnya di dunia nyata.",
    diagramImage: "/images/mtk 3.png",
    stepperTitle: "Rumus Segitiga Skala",
    formulaText: [
      "𝐽𝑎𝑟𝑎𝑘 𝑆𝑒𝑏𝑒𝑛𝑎𝑟𝑛𝑦𝑎 (𝐽𝑆) = Jarak Pada Peta (JP) × Nilai Skala",
      "𝐽𝑎𝑟𝑎𝑘 𝑝𝑎𝑑𝑎 𝑃𝑒𝑡𝑎 (𝐽𝑃) = $\\frac{Jarak Sebenarnya (JS)}{Nilai Skala}$",
    ],
    stepperTitle2: "Contoh Soal Perhitungan",
    exampleQuestion:
      "Pada denah desa berskala 1 : 1.000, jarak dari pos ronda ke balai desa terukur sejauh 5 cm. Berapa meter jarak sebenarnya?",
    exampleSolutionSteps: [
      "Jarak Sebenarnya (𝐽𝑆): 5 𝑐𝑚 × 1.000 = 5.000 𝑐𝑚",
      "Ubah sentimeter ke meter (dibagi 100): $\\frac{5.000}{100}$ = 50 meter",
    ],
    analogyTitle: "Simulator Denah & Skala Interaktif",
    analogyText:
      "Skala pada denah menghubungkan ukuran gambar di atas kertas dengan dunia nyata. Setiap 1 cm pada denah mewakili jarak nyata sebenarnya sesuai angka skalanya!",
  },
  4: {
    chapterNumber: 4,
    title: "Konversi Satuan Panjang dan Pengukuran Bangunan",
    description:
      "Setiap turun satu anak tangga dikali 10, dan setiap naik satu anak tangga dibagi 10: \n ● Kilometer (km) \n ● Hektometer (hm) \n ● Dekameter (dam) \n ● Meter (m) \n ● Desimeter (dm) \n ● Centimeter (cm) \n ● Milimeter (mm) \n Dari meter ke centimeter turun 2 tangga, sehingga: 1 𝑚𝑒𝑡𝑒𝑟 = 100 𝑐𝑒𝑛𝑡𝑖𝑚𝑒𝑡𝑒𝑟 (cm)",
    diagramImage: "/images/mtk 4.png",
    stepperTitle: "Penerapan Operasi Pengurangan Bangunan",
    formulaText: [
      "Untuk mencari kekurangan panjang material renovasi:",
      "Kekurangan = Panjang Target Kebutuhan - Panjang Material yang Ada",
    ],
    stepperTitle2: "Contoh Kasus Lapangan",
    exampleQuestion:
      "Warga desa sedang gotong royong memperbaiki lantai jembatan penyeberangan yang ambles bolong sepanjang 3 meter. Papan kayu tebal yang saat ini tersedia baru berukuran 180 cm.",
    exampleSolutionSteps: [
      "Samakan satuan ukuran ke centimeter: 3 𝑚𝑒𝑡𝑒𝑟 = 3 × 100 = 300 cm",
      "Hitung panjang kayu tambahan yang perlu dipotong: Kekurangan Kayu = 300 cm - 180 cm = 120 cm (1,2 meter)"
    ],
    analogyTitle: "Simulator Tangga Konversi Satuan Panjang",
    analogyText:
      "Tangga satuan panjang membantu kita mengubah satuan ukuran dengan mudah. Setiap turun 1 anak tangga dikalikan 10, dan setiap naik 1 anak tangga dibagi 10!",
  },
};

export const inggrisChaptersData: Record<number, ChapterData> = {
  1: {
    chapterNumber: 1,
    title: "Hobbies and Leisure Activities (Kegemaran Waktu Luang)",
    description:
      "In this chapter, we learn how to talk about daily activities that we do from morning until evening, as well as expressing cardinal numbers to describe routines and schedules in English.",
    diagramImage: "/images/big 1.png",
    stepperTitle: "Kosakata Hobi dan Aktivitas (Vocabulary)",
    vocabularyTable: [
      { english: "Playing football", indonesian: "Bermain sepak bola" },
      { english: "Riding a bicycle", indonesian: "Bersepeda" },
      { english: "Playing on the swing", indonesian: "Bermain ayunan" },
      { english: "Reading books", indonesian: "Membaca buku" },
      { english: "Gardening", indonesian: "Berkebun" },
      { english: "Drawing pictures", indonesian: "Menggambar" },
    ],
    stepperTitle2: "Pola Kalimat Ekspresi Kegemaran (Language Focus)",
    exampleQuestion:
      "Untuk menyatakan hobi yang disukai menggunakan kata kerja like / love + Verb-ing:",
    exampleSolutionSteps: [
      "'I like playing football in the afternoon.' (Saya suka bermain sepak bola di sore hari.)",
      "'They love running around the playground.' (Mereka suka berlari-lari di sekitar taman bermain.)",
      "'What is your favorite hobby?' (Apa hobi kegemaranmu?)"
    ],
  },
  2: {
    chapterNumber: 2,
    title: " School Subjects and Occupations (Mata Pelajaran dan Profesi)",
    description:
      "This chapter introduces various school subjects and common occupations (jobs) with their English terms, helping students expand their vocabulary related to daily school life and the world of work.",
    diagramImage: "/images/big 2.png",
    stepperTitle: "Kosakata Mata Pelajaran (School Subjects)",
    vocabularyTable: [
      { english: "Mathematics (Math)", indonesian: "Matematika (berhitung, angka, bangun datar, pecahan)" },
      { english: "Science / Natural Science", indonesian: "Ilmu Pengetahuan Alam (hewan, tumbuhan, wujud zat, bumi)" },
      { english: "English", indonesian: "Bahasa Inggris" },
      { english: "Social Studies", indonesian: "Ilmu Pengetahuan Sosial (sejarah, peta, masyarakat)" },
      { english: "Physical Education (PE)", indonesian: "Pendidikan Jasmani / Olahraga" },
    ],
    stepperTitle2: "Pola Percakapan Profesi Pengajar",
    exampleQuestion:
      "Pola tanya-jawab profesi dan mata pelajaran yang diajarkan (Subject & Occupation):",
    exampleSolutionSteps: [
      "'Who is he?' → 'He is a teacher.' (Dia adalah seorang guru.)",
      "'What does he teach?' → 'He teaches mathematics.' (Dia mengajar pelajaran matematika.)"
    ],
  },
  3: {
    chapterNumber: 3,
    title: "Asking and Giving Directions to Public Places (Panduan Arah Turis)",
    description:
      "This chapter focuses on learning useful vocabulary related to public places such as markets, stations, and hospitals, along with essential phrases for asking and giving directions clearly and politely.",
    diagramImage: "/images/big 3.png",
    stepperTitle: "Kosakata Arah dan Fasilitas Desa (Directions & Places)",
    vocabularyTable: [
      { english: "Turn left", indonesian: "Belok ke kiri" },
      { english: "Turn right", indonesian: "Belok ke kanan" },
      { english: "Go straight ahead", indonesian: "Berjalan lurus ke depan" },
      { english: "Rice field", indonesian: "Area persawahan padi" },
      { english: "Traditional market", indonesian: "Pasar tradisional" },
      { english: "Wooden bridge", indonesian: "Jembatan kayu" },
      { english: "School yard", indonesian: "Halaman sekolah" },
    ],
    stepperTitle2: "Pola Percakapan Meminta Petunjuk Arah",
    exampleQuestion:
      "Pola kalimat santun untuk meminta dan memberikan petunjuk arah menuju tempat umum:",
    exampleSolutionSteps: [
      "'Excuse me, could you tell me the way to the rice field?' (Permisi, bisakah beritahu jalan menuju sawah?)",
      "'Go straight ahead, then turn right near the bridge.' (Jalan lurus ke depan, lalu belok kanan di dekat jembatan.)"
    ],
  },
};

export interface SubjectConfig {
  key: SubjectKey;
  slug: string;
  name: string;
  bannerImage: string;
  bannerAlt: string;
  chapters: Record<number, ChapterData>;
}

export const subjectsConfig: Record<SubjectKey, SubjectConfig> = {
  IPA: {
    key: "IPA",
    slug: "ipas",
    name: "IPAS",
    bannerImage: "/images/bg ipa.png",
    bannerAlt: "Banner Hero IPAS",
    chapters: ipasChaptersData,
  },
  MTK: {
    key: "MTK",
    slug: "matematika",
    name: "MATEMATIKA",
    bannerImage: "/images/bg mtk.png",
    bannerAlt: "Banner Hero Matematika",
    chapters: matematikaChaptersData,
  },
  "B.ING": {
    key: "B.ING",
    slug: "inggris",
    name: "B.INGGRIS",
    bannerImage: "/images/bg ing.png",
    bannerAlt: "Banner Hero Bahasa Inggris",
    chapters: inggrisChaptersData,
  },
};

export function parseSubjectKey(raw?: string): SubjectKey {
  if (!raw) return "IPA";
  const s = raw.toLowerCase().trim();
  if (s.includes("mtk") || s.includes("matematika") || s.includes("math")) return "MTK";
  if (s.includes("ing") || s.includes("english")) return "B.ING";
  return "IPA";
}

interface DetailMateriProps {
  initialSubject?: SubjectKey | string;
}

export default function DetailMateri({ initialSubject = "IPA" }: DetailMateriProps) {
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey>(() =>
    parseSubjectKey(initialSubject)
  );
  const [activeChapter, setActiveChapter] = useState<number>(1);

  // Sync if initialSubject prop changes or on initial mount from URL if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname.includes("matematika") || pathname.includes("mtk")) {
        setSelectedSubject("MTK");
      } else if (pathname.includes("inggris") || pathname.includes("bing")) {
        setSelectedSubject("B.ING");
      } else if (pathname.includes("ipas") || pathname.includes("ipa")) {
        setSelectedSubject("IPA");
      } else if (initialSubject) {
        setSelectedSubject(parseSubjectKey(initialSubject));
      }
    }
  }, [initialSubject]);

  const currentSubjectConfig = subjectsConfig[selectedSubject] || subjectsConfig.IPA;
  const currentChapters = currentSubjectConfig?.chapters || ipasChaptersData;
  const chapterKeys = currentChapters
    ? Object.keys(currentChapters)
      .map(Number)
      .sort((a, b) => a - b)
    : [1];

  // Safely fallback if activeChapter does not exist in current subject
  const currentChapter: ChapterData =
    currentChapters?.[activeChapter] ||
    currentChapters?.[chapterKeys[0]] ||
    ipasChaptersData[1] || {
      chapterNumber: 1,
      title: "Materi Pembelajaran",
      description: "Materi sedang disiapkan.",
      diagramImage: "/images/bg mtk.png",
      stepperTitle: "Panduan Materi",
      steps: [],
      formulaText: [],
      analogyTitle: "Catatan Pembelajaran",
      analogyText: "Simak materi dengan teliti.",
    };

  const handleSelectSubject = (subjectKey: SubjectKey) => {
    setSelectedSubject(subjectKey);
    setActiveChapter(1);
    if (typeof window !== "undefined") {
      const targetSlug = subjectsConfig[subjectKey]?.slug || "ipas";
      window.history.pushState(null, "", `/materi/${targetSlug}`);
    }
  };

  const handleNextChapter = () => {
    if (!chapterKeys || chapterKeys.length === 0) return;
    setActiveChapter((prev) => {
      const currentIndex = chapterKeys.indexOf(prev);
      if (currentIndex === -1) return chapterKeys[0];
      const nextIndex = (currentIndex + 1) % chapterKeys.length;
      return chapterKeys[nextIndex];
    });
  };

  const hasAnalogy =
    selectedSubject === "MTK"
      ? activeChapter === 1 || activeChapter === 2 || Boolean(currentChapter?.analogyTitle || currentChapter?.analogyText)
      : selectedSubject !== "B.ING" && Boolean(currentChapter?.analogyTitle || currentChapter?.analogyText);

  return (
    <div className="w-full min-h-screen bg-white relative p-0 m-0 text-slate-900 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Main Content Area: Padding top mendekati Navbar & Spacing bawah lega dan proporsional sebelum Footer */}
      <main className="relative flex-1 w-full pt-[64px] sm:pt-[70px] md:pt-[78px] pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        {/* 1. Tab Mata Pelajaran (Mobile: Kiri Atas Overlap Hero Banner | Desktop: Posisi Sisi Kiri Layar Penuh) */}
        <div className="absolute left-0 top-[88px] sm:top-[100px] md:top-[140px] lg:top-[160px] z-30 flex flex-col gap-2 sm:gap-2.5 md:gap-4">
          {(["IPA", "MTK", "B.ING"] as const).map((subject, idx) => {
            const isActive = selectedSubject === subject;
            const displayLabel = subject === "IPA" ? "IPAS" : subject;
            return (
              <motion.button
                key={subject}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + idx * 0.08, type: "spring", stiffness: 350, damping: 22 }}
                whileHover={{ scale: 1.08, x: 6 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSelectSubject(subject)}
                className={`font-pixel font-bold text-xs sm:text-[13px] md:text-sm lg:text-base py-2.5 sm:py-3 md:py-4 lg:py-5 px-4 sm:px-5 md:px-7 lg:px-9 rounded-r-full rounded-l-none transition-colors duration-200 shadow-md md:shadow-2xl cursor-pointer select-none tracking-wider uppercase text-left ${isActive
                  ? "bg-[#7B2CBF] text-white shadow-[0_2px_12px_rgba(123,44,191,0.5)] md:shadow-[0_4px_24px_rgba(123,44,191,0.7)] origin-left"
                  : "bg-white text-[#7B2CBF] border-y-2 border-r-2 border-[#7B2CBF] hover:bg-purple-50 origin-left"
                  }`}
                title={`Mata Pelajaran ${displayLabel}`}
              >
                {displayLabel}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-[48px] relative"
        >
          {/* 2. Banner Hero (Top Section) - Background banner transisi fade murni tanpa pergerakan posisi */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full mt-1 sm:mt-2 mb-0 md:mb-3"
          >
            {/* Hero Banner Container Bersih: Sudut bawah flat/tajam di mobile agar menyatu mulus dengan container materi */}
            <div className="relative rounded-t-2xl sm:rounded-t-3xl rounded-b-none md:rounded-b-3xl md:rounded-3xl overflow-hidden shadow-md sm:shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentSubjectConfig?.bannerImage || "/images/bg ipa.png"}
                alt={currentSubjectConfig?.bannerAlt || "Banner Mata Pelajaran"}
                className="w-full h-auto object-cover block select-none rounded-t-2xl sm:rounded-t-3xl rounded-b-none md:rounded-b-3xl md:rounded-3xl transition-opacity duration-300"
              />
            </div>

            {/* Tombol Pintu Keluar / Kembali ke Halaman Materi Utama di Pojok Kanan Atas (Warna Ungu Khas Aplikasi) */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="absolute right-2.5 sm:right-4 md:right-4 top-2.5 sm:top-3.5 z-40"
            >
              <Link
                href="/materi"
                title="Kembali ke Daftar Materi"
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#7B2CBF] hover:bg-[#6c28d9] active:scale-95 text-white shadow-md md:shadow-xl transition-colors duration-200 group select-none cursor-pointer border border-white/30"
              >
                <DoorOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] text-white" />
                <span className="font-poppins font-bold text-xs sm:text-sm text-white tracking-wide">
                  Kembali
                </span>
              </Link>
            </motion.div>

            {/* 3. Tombol Panah Ungu Bulat di Kanan: Berada di kanan banner */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.88 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={handleNextChapter}
              title="Bab Selanjutnya"
              className="absolute right-1.5 sm:right-2.5 md:right-0 md:translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#7B2CBF] hover:bg-[#6c28d9] text-white flex items-center justify-center shadow-lg md:shadow-2xl transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-[3]" />
            </motion.button>
          </motion.section>

          {/* 4. Interactive Chapter Tab Navigator */}
          {/* DESKTOP TABS (hidden md:flex): Ukuran Orisinal Desktop */}
          <div className="hidden md:flex relative items-end justify-start gap-1.5 sm:gap-2.5 md:gap-3 px-5 sm:px-8 md:px-10 -mt-36 sm:-mt-40 md:-mt-44 -mb-1">
            {chapterKeys.map((num, idx) => {
              const isActive = activeChapter === num;
              return (
                <motion.button
                  key={num}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + idx * 0.05, type: "spring", stiffness: 350, damping: 22 }}
                  whileHover={{ y: isActive ? 0 : -4, scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActiveChapter(num)}
                  className={`font-poppins font-bold cursor-pointer transition-colors duration-200 select-none transform rounded-t-xl sm:rounded-t-2xl rounded-b-none px-6 sm:px-9 md:px-10 pt-3.5 sm:pt-4 md:pt-5 pb-5 sm:pb-6 md:pb-7 text-2xl sm:text-3xl md:text-4xl text-center bg-[#3B1778] shadow-none ${isActive
                    ? "translate-y-0 z-20 text-white"
                    : "translate-y-6 sm:translate-y-7 md:translate-y-8 z-0 text-purple-200/70 hover:text-white"
                    }`}
                  title={`Bab ${num}`}
                >
                  {num}
                </motion.button>
              );
            })}
          </div>

          {/* MOBILE TABS (flex md:hidden): Arched Folder Tabs di Atas Container Ungu */}
          <div className="flex md:hidden relative items-end justify-start gap-1 sm:gap-2 px-3 sm:px-5 -mt-16 sm:-mt-20 -mb-[2px] z-20">
            {chapterKeys.map((num, idx) => {
              const isActive = activeChapter === num;
              return (
                <motion.button
                  key={num}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + idx * 0.05, type: "spring", stiffness: 350, damping: 22 }}
                  whileHover={{ y: isActive ? 0 : -2, scale: 1.06 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setActiveChapter(num)}
                  className={`font-poppins font-bold cursor-pointer transition-colors duration-200 select-none transform rounded-t-xl sm:rounded-t-2xl rounded-b-none px-3.5 sm:px-5 pt-2.5 sm:pt-3.5 text-base sm:text-lg min-w-[42px] sm:min-w-[48px] text-center border-b-0 outline-none bg-[#3B1778] ${isActive
                    ? "translate-y-0 z-20 text-white pb-4 sm:pb-5 shadow-none"
                    : "translate-y-2.5 sm:translate-y-3 z-0 text-purple-200/60 hover:text-white pb-2 sm:pb-2.5"
                    }`}
                  title={`Bab ${num}`}
                >
                  {num}
                </motion.button>
              );
            })}
          </div>

          {/* Container Utama Materi (Gradasi Ungu Vertikal Sesuai 4 Card Homepage & Shadow 2xl Melayang Overlap relative z-10) */}
          <div
            className={`relative z-10 w-full bg-gradient-to-b from-[#3B1778] via-[#2A0D5A] to-[#190C38] text-white rounded-2xl sm:rounded-3xl px-4 pt-7 pb-8 sm:px-7 sm:pt-9 sm:pb-10 md:p-10 shadow-2xl ${
              hasAnalogy ? "mb-0" : "mb-8 sm:mb-12 md:mb-16"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedSubject}-${activeChapter}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 180, damping: 18 }}
              >
                {/* a. Judul Bab paling atas */}
              <h2 className="font-poppins text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-snug text-left">
                {currentChapter?.title || "Materi Pembelajaran"}
              </h2>

              {/* DESKTOP LAYOUT (hidden md:grid): 2 Kolom Seimbang 1:1 (Kiri Teks Deskripsi, Kanan Frame Diagram Diperbesar) */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-10">
                {/* Kolom Kiri: Teks Penjelasan format RATA KANAN-KIRI (text-justify) */}
                <div className="flex flex-col justify-center">
                  <p className="font-poppins text-white text-sm sm:text-base md:text-base lg:text-lg leading-relaxed md:leading-loose text-justify font-normal whitespace-pre-line">
                    {formatDescription(currentChapter?.description)}
                  </p>
                </div>

                {/* Kolom Kanan: Frame Gambar Modul/Materi Melebar Penuh & Scrollable */}
                {currentChapter?.diagramImage && (
                  <div className="w-full flex justify-center items-center">
                    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20">
                      <div className="w-full max-h-[500px] overflow-y-auto overflow-x-hidden custom-scrollbar touch-pan-y overscroll-contain">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={currentChapter.diagramImage}
                          alt={currentChapter?.title || "Diagram Materi"}
                          className="w-full h-auto block select-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* MOBILE LAYOUT (block md:hidden): 1 Kolom Vertikal (Paragraf di Atas, Gambar Diagram di Bawah) */}
              <div className="block md:hidden mb-5 sm:mb-6">
                {/* a. Teks Deskripsi Penjelasan di Atas */}
                {currentChapter?.description && (
                  <p className="font-poppins text-white text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose text-justify sm:text-left font-normal px-0.5 mb-4 sm:mb-5 whitespace-pre-line">
                    {formatDescription(currentChapter.description)}
                  </p>
                )}

                {/* b. Gambar Modul/Materi Melebar Penuh & Scrollable Vertikal (Tinggi Ringkas & Konsisten) */}
                {currentChapter?.diagramImage && (
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-white/20">
                      <div className="w-full max-h-[260px] sm:max-h-[280px] overflow-y-auto overflow-x-hidden custom-scrollbar touch-pan-y overscroll-contain">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={currentChapter.diagramImage}
                          alt={currentChapter?.title || "Diagram Materi"}
                          className="w-full h-auto block select-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* d. Section Stepper, Formula & Vocabulary: Susun list poin secara vertikal ke bawah */}
              {(currentChapter?.stepperTitle ||
                (currentChapter?.formulaText && currentChapter.formulaText.length > 0) ||
                (currentChapter?.vocabularyTable && currentChapter.vocabularyTable.length > 0) ||
                (currentChapter?.steps && currentChapter.steps.length > 0)) && (
                  <div className="mt-4 sm:mt-5 md:mt-4">
                    {currentChapter?.stepperTitle && (
                      <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-white mb-3.5 sm:mb-4 md:mb-6 tracking-normal leading-snug text-left">
                        {currentChapter.stepperTitle}
                      </h3>
                    )}

                    {/* 1. KOTAK UTAMA (Outer Container) Khusus Formula Text */}
                    {currentChapter?.formulaText && currentChapter.formulaText.length > 0 && (
                      <div className="w-full bg-white/[0.08] border border-white/20 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 mb-5 md:mb-6 backdrop-blur-sm shadow-xl flex flex-col gap-3 sm:gap-4 md:gap-4.5">
                        {currentChapter.formulaText.map((formula, fIdx) => (
                          <div
                            key={`formula-${fIdx}`}
                            className="w-full bg-white/10 hover:bg-white/[0.16] border border-white/30 rounded-xl sm:rounded-2xl md:rounded-full px-4 sm:px-6 py-3.5 sm:py-4 md:py-4.5 flex items-center justify-center text-center shadow-md transition-all duration-200 overflow-x-auto overflow-y-hidden"
                          >
                            <div className="w-full font-poppins text-white text-xs sm:text-[13px] md:text-base font-semibold leading-loose md:leading-loose tracking-wide text-center flex items-center justify-center flex-wrap gap-1">
                              <MathRenderer
                                content={formula}
                                className="text-center inline-flex items-center justify-center flex-wrap text-white font-semibold"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 2. Vocabulary Table (Khusus Bab Bahasa Inggris: 2 Kolom Bubble/Kapsul Terpisah Per Kolom) */}
                    {currentChapter?.vocabularyTable && currentChapter.vocabularyTable.length > 0 && (
                      <div className="w-full flex flex-col mb-6">
                        {/* Header Tabel 2 Kolom Kapsul Terpisah */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-2.5 sm:mb-3">
                          {/* Header Kapsul Bahasa Inggris */}
                          <div className="flex items-center justify-center py-2 sm:py-2.5 px-3 sm:px-5 md:px-6 rounded-xl md:rounded-full bg-white/15 border border-white/30 text-white font-poppins font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-center select-none shadow-sm backdrop-blur-sm">
                            Bahasa Inggris
                          </div>
                          {/* Header Kapsul Bahasa Indonesia */}
                          <div className="flex items-center justify-center py-2 sm:py-2.5 px-3 sm:px-5 md:px-6 rounded-xl md:rounded-full bg-white/15 border border-white/30 text-white font-poppins font-bold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-center select-none shadow-sm backdrop-blur-sm">
                            Bahasa Indonesia
                          </div>
                        </div>

                        {/* Baris Pasangan Bubble Kosakata Kiri & Kanan Terpisah */}
                        <div className="flex flex-col space-y-2 sm:space-y-2.5 md:space-y-3">
                          {currentChapter.vocabularyTable.map((item, idx) => (
                            <div
                              key={`vocab-row-${idx}`}
                              className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 items-stretch"
                            >
                              {/* Bubble Kolom Kiri: Bahasa Inggris */}
                              <div className="flex items-center border border-white/80 rounded-xl md:rounded-full px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-white font-poppins bg-white/5 backdrop-blur-[1px] shadow-sm hover:bg-white/10 transition-colors">
                                <span className="font-bold text-[11px] sm:text-xs md:text-sm text-white tracking-wide break-words">
                                  {item.english}
                                </span>
                              </div>

                              {/* Bubble Kolom Kanan: Bahasa Indonesia */}
                              <div className="flex items-center border border-white/80 rounded-xl md:rounded-full px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-white font-poppins bg-white/5 backdrop-blur-[1px] shadow-sm hover:bg-white/10 transition-colors">
                                <span className="font-normal text-[10.5px] sm:text-xs md:text-sm text-white/95 leading-relaxed break-words">
                                  {item.indonesian}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. Steps Stepper List (Khusus bab yang memiliki data steps / Tingkatan Trofik) */}
                    {(!currentChapter?.vocabularyTable || currentChapter.vocabularyTable.length === 0) &&
                      currentChapter?.steps &&
                      currentChapter.steps.length > 0 && (
                        <div className="flex flex-col space-y-3 sm:space-y-3.5 md:space-y-4 relative">
                          {currentChapter.steps.map((step, idx) => {
                            const isLast = idx === (currentChapter.steps?.length ?? 0) - 1;
                            return (
                              <div
                                key={`step-${idx}`}
                                className="flex items-start gap-2.5 sm:gap-3.5 md:gap-4 relative group"
                              >
                                {/* Kolom Nomor & Garis Vertikal (Presisi Center Horisontal & Vertikal) */}
                                <div className="relative flex flex-col items-center shrink-0 w-8 md:w-9 self-stretch">
                                  {/* Garis vertikal stepper antar lingkaran */}
                                  {!isLast && (
                                    <div
                                      className="absolute top-4 md:top-[18px] left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+0.75rem)] sm:h-[calc(100%+0.875rem)] md:h-[calc(100%+1rem)] bg-white/70 z-0 pointer-events-none"
                                      aria-hidden="true"
                                    />
                                  )}

                                  {/* Nomor Urut Lingkaran Putih di Kiri */}
                                  <div className="relative z-10 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white text-[#2A0D5A] font-poppins font-bold text-xs md:text-sm flex items-center justify-center shrink-0 shadow-md">
                                    {idx + 1}
                                  </div>
                                </div>

                                {/* Box Border Rounded Putih di Sebelahnya */}
                                <div className="flex-1 min-h-[2rem] md:min-h-[2.25rem] border border-white/80 rounded-xl md:rounded-full px-3.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-white font-poppins text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed bg-white/5 backdrop-blur-[1px] shadow-sm hover:bg-white/10 transition-colors text-left flex items-center">
                                  <MathRenderer content={step} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                    {/* Narasi Tambahan Opsional (Conditional Rendering) */}
                    {currentChapter?.stepperTitle2 && (
                      <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-white mt-8 sm:mt-10 mb-3.5 sm:mb-4 md:mb-6 tracking-normal leading-snug text-left">
                        {currentChapter.stepperTitle2}
                      </h3>
                    )}

                    {/* 1. Kotak Formula Ungu Solid untuk Pola Kalimat / Rumus / Soal Cerita */}
                    {currentChapter?.exampleQuestion && (
                      <div className="w-full bg-[#5B2E9D] border border-purple-400/30 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 shadow-xl md:shadow-2xl text-center flex items-center justify-center">
                        <p className="font-poppins text-white text-xs sm:text-sm md:text-base font-semibold leading-relaxed sm:leading-loose text-center max-w-3xl mx-auto">
                          <MathRenderer content={currentChapter.exampleQuestion} />
                        </p>
                      </div>
                    )}

                    {currentChapter?.exampleSolutionSteps && currentChapter.exampleSolutionSteps.length > 0 && (
                      <div className="flex flex-col space-y-2.5 sm:space-y-3.5 mb-4">
                        {currentChapter.exampleSolutionSteps.map((step, sIdx) => (
                          <div
                            key={`sol-${sIdx}`}
                            className="flex items-start gap-2.5 sm:gap-3.5 md:gap-4 bg-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-colors shadow-sm"
                          >
                            {/* Bullet / Step Number */}
                            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#7B2CBF] text-white border-2 border-white/60 font-poppins font-bold text-[11px] sm:text-xs md:text-sm flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 shadow-md">
                              {sIdx + 1}
                            </div>

                            {/* Content Langkah KaTeX */}
                            <div className="flex-1 font-poppins text-white text-xs sm:text-[13px] md:text-base font-normal leading-loose md:leading-loose text-left overflow-x-auto">
                              <MathRenderer content={step} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 2. Narasi Deskripsi Standar (Jika tidak memiliki exampleSolutionSteps) */}
                    {(!currentChapter?.exampleSolutionSteps || currentChapter.exampleSolutionSteps.length === 0) &&
                      currentChapter?.stepperDescription2 && (
                        <p
                          className={`font-poppins text-white/90 text-[10.5px] sm:text-xs md:text-sm leading-relaxed text-justify sm:text-left font-normal ${!currentChapter?.stepperTitle2 ? "mt-8 sm:mt-10" : ""
                            }`}
                        >
                          <MathRenderer content={currentChapter.stepperDescription2} />
                        </p>
                      )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 5. Container Analogi: Di Bawah Container Utama dan di Atas Footer */}
          {selectedSubject === "MTK" && activeChapter === 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
              className="mt-8 sm:mt-10 md:mt-16 w-full"
            >
              {/* Header Analogi dengan Icon Bohlam 💡 */}
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-5">
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
                <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-slate-900 text-center leading-snug">
                  {currentChapter?.analogyTitle || "Analogi Potongan Pizza"}
                </h3>
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
              </div>
              <AnalogiPizza />
            </motion.div>
          ) : selectedSubject === "MTK" && activeChapter === 2 ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
              className="mt-8 sm:mt-10 md:mt-16 w-full"
            >
              {/* Header Simulator Diskon Belanja dengan Icon Bohlam 💡 */}
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-5">
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
                <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-slate-900 text-center leading-snug">
                  {currentChapter?.analogyTitle || "Simulator Diskon Belanja Interaktif"}
                </h3>
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
              </div>
              <SimulatorDiskon />
            </motion.div>
          ) : selectedSubject === "MTK" && activeChapter === 3 ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
              className="mt-8 sm:mt-10 md:mt-16 w-full"
            >
              {/* Header Simulator Denah & Skala Interaktif dengan Icon Bohlam 💡 */}
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-5">
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
                <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-slate-900 text-center leading-snug">
                  {currentChapter?.analogyTitle || "Simulator Denah & Skala Interaktif"}
                </h3>
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
              </div>
              <SimulatorSkala />
            </motion.div>
          ) : selectedSubject === "MTK" && activeChapter === 4 ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
              className="mt-8 sm:mt-10 md:mt-16 w-full"
            >
              {/* Header Simulator Tangga Konversi dengan Icon Bohlam 💡 */}
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-5">
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
                <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-slate-900 text-center leading-snug">
                  {currentChapter?.analogyTitle || "Simulator Tangga Konversi Satuan Panjang"}
                </h3>
                <span className="text-base sm:text-lg md:text-2xl select-none">
                  💡
                </span>
              </div>
              <SimulatorTangga />
            </motion.div>
          ) : selectedSubject !== "B.ING" && (currentChapter?.analogyTitle || currentChapter?.analogyText) ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 140, damping: 16 }}
              className="mt-8 sm:mt-10 md:mt-16 w-full"
            >
              {/* Header Analogi dengan Icon Bohlam 💡 */}
              {currentChapter?.analogyTitle && (
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-5">
                  <span className="text-base sm:text-lg md:text-2xl">💡</span>
                  <h3 className="font-poppins text-sm sm:text-base md:text-2xl font-bold text-slate-900 text-center leading-snug">
                    {currentChapter.analogyTitle}
                  </h3>
                  <span className="text-base sm:text-lg md:text-2xl">💡</span>
                </div>
              )}

              {/* Container Card Analogi Berwarna Ungu Muda bg-[#5B2E9D] */}
              {currentChapter?.analogyText && (
                <div
                  key={`analogy-${selectedSubject}-${activeChapter}`}
                  className="w-full bg-[#5B2E9D] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl md:shadow-2xl text-center mb-6 sm:mb-8 md:mb-16"
                >
                  <p className="font-poppins text-[10.5px] sm:text-xs md:text-[15px] leading-relaxed text-purple-100 font-normal text-justify sm:text-center">
                    {currentChapter.analogyText}
                  </p>
                </div>
              )}
            </motion.div>
          ) : null}
        </motion.div>
      </main>

      {/* 6. Global Footer (Identik dengan Home Page, Spacing Simetris & Lega) */}
      <Footer className="pt-8 sm:pt-10 md:pt-14" />
    </div>
  );
}
