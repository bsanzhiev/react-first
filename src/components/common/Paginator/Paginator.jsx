import React, { useState } from "react";
import styles from "./Paginator.module.css";
import PropTypes from "prop-types";
import cn from "classnames";

let Paginator = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * (portionSize + 1);
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                { [styles.selectedPage]: currentPage === p },
                styles.pageNumber
              )}
              key={p}
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

Paginator.propTypes = {
  totalUsersCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.object,
  totalItemsCount: PropTypes.object,
  portionSize: PropTypes.number,
};

export default Paginator;
