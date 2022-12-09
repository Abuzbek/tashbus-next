import React, { FC, useState } from "react";
import SearchIcon from "../../../Icons/SearchIcon";
import styles from "./SearchDialog.module.scss";
import useTranslation from "next-translate/useTranslation";
interface Props {}

const SearchInput: FC<Props> = () => {
  const { t } = useTranslation("common");
  const [value, setValue] = useState("");
  const searching = () => {
    console.log(value);
  };
  const keyUp = (e: any | KeyboardEvent) => {
    if (e.key == "Enter") {
      searching();
    }
  };
  return (
    <div className={styles.search_input}>
      <input
        type="text"
        placeholder={`${t("search")}...`}
        value={value}
        onInput={(e: any) => setValue(e.target.value)}
        onKeyUp={keyUp}
      />
      <button onClick={searching}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
