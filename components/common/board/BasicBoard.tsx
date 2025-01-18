import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import styles from "./BasicBoard.module.scss";
import { ChevronUp } from "lucide-react";
import LabelCalender from "../calender/LabelCalender";

const BasicBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__header__titleBox}>
          <Checkbox className="w-5 h-5" />
          <span className={styles.title}>
            Please enter a title for the board
          </span>
        </div>
        {/*ghost: hover시 색상 fill*/}
        <Button variant={"ghost"}>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
      <div className={styles.container__body}>
        <div className={styles.container__body__calenderBox}>
          <LabelCalender label="From" />
          <LabelCalender label="TO" />
        </div>
        <div className={styles.container__body__buttonBox}>
          <Button
            variant={"ghost"}
            className="font-normal text-gray-400 hover:bg-green-50 hover:text-green-500"
          >
            Duplicate
          </Button>
          <Button
            variant={"ghost"}
            className="font-normal text-gray-400 hover:bg-red-50 hover:text-red-500"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className={styles.container__footer}></div>
    </div>
  );
};

export default BasicBoard;
