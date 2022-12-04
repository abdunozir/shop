import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";

export default function Timer() {
  let [day, setDay] = useState(0);
  let [soat, setSoat] = useState(0);
  let [min, setMin] = useState(1);
  let [secund, setSecund] = useState(10);
  let [ended, setEnded] = useState(false);
  let net = useMemo(() => {}, []);
  let sec = () => {
    setSecund(secund - 1);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (secund === 1 && min > 1) {
        setSecund(60);
        setMin(min - 1);
      } else if (secund === 1 && min === 1 && soat > 1) {
        setSecund(60);
        setMin(60);
        setSoat(soat - 1);
      } else if (secund === 1 && min === 1 && soat === 1 && day > 0) {
        setSecund(60);
        setMin(60);
        setSoat(24);
        setDay(day - 1);
      } else if (secund === 1 && min === 1 && soat === 1 && day === 0) {
        setSecund(60);
        setMin(60);
        setSoat(soat - 1);
      } else if (secund === 1 && min === 1 && soat === 0 && day === 0) {
        setSecund(60);
        setMin(min - 1);
      } else if (secund === 0 && min === 0 && soat === 0 && day === 0) {
        setSecund(0);
        setEnded(true);
        return;
      } else {
        sec();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secund]);

  return (
    <div>
      {ended == false ? (
        <>
          <div
            className="violet__item-hurry__box"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 0 10px 0",
            }}
          >
            <i className="bx bx-time"></i>
            <p className="violet__item-hurry">Hurry up! Sale end in:</p>
          </div>
          <ul className="violet__date-list">
            <li className="violet__date-item">
              <p className="violet__date-date">
                {day < 10 ? "0" : ""}
                {day}
              </p>
              <p className="violet__date-text">days</p>
            </li>
            <li className="violet__date-item">
              <p className="violet__date-date">
                {soat < 10 ? "0" : ""}
                {soat}
              </p>
              <p className="violet__date-text">hours</p>
            </li>
            <li className="violet__date-item">
              <p className="violet__date-date">
                {min < 10 ? "0" : ""}
                {min}
              </p>
              <p className="violet__date-text">mins</p>
            </li>
            <li className="violet__date-item">
              <p className="violet__date-date">
                {secund < 10 ? "0" : ""}
                {secund}
              </p>
              <p className="violet__date-text">secs</p>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
