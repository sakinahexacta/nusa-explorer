"use client";

import React from "react";
import DetailMateri, { ChapterData, ipasChaptersData } from "./DetailMateri";

export type { ChapterData };
export { ipasChaptersData };

export default function MateriDetailIPAS() {
  return <DetailMateri initialSubject="IPA" />;
}
