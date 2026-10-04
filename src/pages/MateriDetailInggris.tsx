"use client";

import React from "react";
import DetailMateri, { ChapterData, inggrisChaptersData } from "./DetailMateri";

export type { ChapterData };
export { inggrisChaptersData };

export default function MateriDetailInggris() {
  return <DetailMateri initialSubject="B.ING" />;
}
