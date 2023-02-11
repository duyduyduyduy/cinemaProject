import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import handleDisplayPrice from "../FunctionHandle/HandleDisPlayPrice";
import './InfoFilm.scss'
function InfoFilm(props: any) {
  const ConsoleLog = () => {
    console.log("Updated data:", props.FilmSummaryState);
    return false;
  };
  const nav = useNavigate();
  return (
    props.FilmSummaryState && (
      <div className="infoFilm">
        {ConsoleLog()}
        <div className="ImgContainer">
          <img src={props.FilmSummaryState.filmImg} alt=""/>
          <h3>{props.FilmSummaryState.nameFilm}</h3>
        </div>
        <div className="infoContainer">
          <div className="warning">
            <span className="spanWar">C{props.FilmSummaryState.age}</span>
            <span>
              {" "}
              (*) Phim chỉ dành cho khán giả từ {
                props.FilmSummaryState.age
              }{" "}
              tuổi trở lên
            </span>
          </div>
        </div>
        <div className="RapInfo">
          <div>
            <b>Rạp:</b>
            <span>{props.FilmSummaryState.Cinema}</span>
          </div>
          <div>
            <b>Suất chiếu:</b>
            <span>{props.FilmSummaryState.showTime}</span>
          </div>
          <div>
            <b>Combo:</b>
            <span>{props.FilmSummaryState.Combo}</span>
          </div>
          <div>
            <b>Ghế:</b>
            <span></span>
          </div>
          <div className="TotalRender">
            <b>Tổng:</b>
            <span>{handleDisplayPrice(props.FilmSummaryState.Sum)} VNĐ</span>
          </div>
        </div>

        <div className="totalEnd">
          <button onClick={() => nav("/booking-seat")}>
            TIẾP TỤC <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    )
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { FilmSummaryState: state.FilmSummaryState };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoFilm);
