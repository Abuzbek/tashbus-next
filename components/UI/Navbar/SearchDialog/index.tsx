import React, { FC } from "react";
import SearchInput from "./SearchInput";
import styles from "./SearchDialog.module.scss";
interface Props {
  show: boolean;
  toggleDialog(): void;
}

const SearchDialog: FC<Props> = ({ show, toggleDialog }) => {
  return (
    <>
      {show && (
        <div className={styles.search_dialog}>
          <div className={styles.search_dialog_header}>
            <button
              className={styles.search_dialog_close_btn}
              onClick={toggleDialog}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className={styles.search_container}>
            <div className={styles.search_wrapper}>
              <SearchInput />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchDialog;
