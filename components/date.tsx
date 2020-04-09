import React from "react";
import moment from "moment";

// Date Generator TODO:
  // console.log(new Date().toLocaleDateString().split("/").join("-"));


const format = (arg: string): string => {
  const date = moment(arg).format("ll");
  const day =  moment(arg).startOf("day").fromNow();
  const recent = parseInt(day.split(" ")[0]);
  if (!recent || recent < 12) {
    return day
  }

  return date;
};

export default function FormatDate({ dateString, className }: { dateString: string; className?: string }): JSX.Element {
  return (
    <time dateTime={dateString} className={"text-white text-sm "+className}>
      {format(dateString)}
    </time>
  );
}
