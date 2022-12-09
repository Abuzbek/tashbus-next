import React, { FC } from "react";
import SearchIcon from "../../../Icons/SearchIcon";

interface Props {
  styles: any;
  toggleDialog(): void;
}

const SearchButton: FC<Props> = ({ styles, toggleDialog }) => {
  return (
    <button className={styles.navbar_search_btn} onClick={toggleDialog}>
      <SearchIcon />
    </button>
  );
};

export default SearchButton;
