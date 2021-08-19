/**
 * Button4
 */
import React from "react";
import s from "./Button4.module.css";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Button4(props) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);

  return (
    <div className="flex flex-col">
      {tr.something}

      <div>
        <span className={s.start}>Dianna </span>
      </div>
    </div>
  );
}
