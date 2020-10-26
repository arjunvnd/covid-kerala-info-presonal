import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PieWrapper from "./PieWrapper";

function ActivePie({ covidInfo }) {
  const transformData = () => {
    return covidInfo.map(item => {
      return {
        name: item.district,
        value: item.active
      };
    });
  };

  return (
    <>
      <PieWrapper data={transformData()} />
    </>
  );
}

ActivePie.propTypes = {};

const mapStateToProps = state => ({
  covidInfo: [...state.covidInfo.covidInfo]
});

export default connect(mapStateToProps)(ActivePie);
