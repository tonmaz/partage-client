/**
 * Gout
 */
import React from "react";
import s from "./Gout.module.css";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";

export function Gout(props) {
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
