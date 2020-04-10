import React from "react";
import moment from "moment";

// Date Generator TODO:
// console.log(new Date().toLocaleDateString().split("/").join("-"));

const format = (arg: string): string => {
  return moment(arg).format("ll");
};

export default function FormatDate({ dateString, className }: { dateString: string; className?: string }): JSX.Element {
  return (
    <time dateTime={dateString} className={"text-xs mg:text-sm " + className}>
      {format(dateString)}
    </time>
  );
}
