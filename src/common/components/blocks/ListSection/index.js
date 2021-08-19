/**
 * ListSection
 */
import React from "react";
import s from "./PostsList.module.css";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function ListSection(props) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);

  return (
    <div className="text-center bg-gray-50 w-auto">
      <h1 className="tracking-wide mt-6 mb-2 font-semibold text-4xl text-center">
        Posts
      </h1>
      {props.posts.map(props.callbackfn)}
    </div>
  );
}
