export interface Hadith {
  id: number;
  text: string;
  author: string;
  type: "hadith";
}

export interface Verse {
  id: number;
  text: string;
  transliteration: string;
  translation_bn: string;
  translation_en: string;
}

export interface Surah {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: "Meccan" | "Medinan";
  total_verses: number;
  verses: Verse[];
}

export interface VerseWithSurahInfo extends Verse {
    surah_id: number;
    surah_name: string;
    surah_transliteration: string;
    surah_translation: string;
}
