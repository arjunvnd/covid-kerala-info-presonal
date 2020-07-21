import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";

function CovidTable({ covidInfo }) {
  const showActiveState = rowData => {
    return (
      <span>
        {`${rowData.active}`}
        <Typography
          color="error"
          variant="caption"
        >{`+${rowData.newCases}`}</Typography>
      </span>
    );
  };

  const columns = [
    { title: "District", field: "district" },
    {
      title: "Active",
      field: "active",
      render: rowData => showActiveState(rowData)
    },
    { title: "Confirmed", field: "confirmed" },
    { title: "Total Deaths", field: "deceased" },
    { title: "Recovered", field: "recovered" }
  ];

  return (
    <>
      <MaterialTable
        labelRowsPerPage={14}
        data={covidInfo}
        columns={columns}
        title="Covid Cases"
        options={{ paging: false }}
      />
    </>
  );
}

CovidTable.propTypes = {
  covidInfo: PropTypes.shape({
    covidInfo: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

const mapStateToProps = state => ({
  covidInfo: JSON.parse(JSON.stringify(state.covidInfo["covidInfo"]))
});

export default connect(mapStateToProps)(CovidTable);
