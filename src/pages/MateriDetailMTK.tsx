"use client";

import React from "react";
import DetailMateri, { ChapterData, matematikaChaptersData } from "./DetailMateri";

export type { ChapterData };
export { matematikaChaptersData };

export default function MateriDetailMTK() {
  return <DetailMateri initialSubject="MTK" />;
}
