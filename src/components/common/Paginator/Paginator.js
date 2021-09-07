import React from "react";
import styles from "./Paginator.module.css";
import PropTypes from "prop-types";

let Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && styles.selectedPage}
            onClick={(p) => {
              onPageChanged(p);
            }}
            key={p.id}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

Paginator.propTypes = {
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.object,
};

export default Paginator;
