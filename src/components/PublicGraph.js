import React, { useState, useEffect } from "react";
import endpoint from "../apis/endpoint";

const PublicGraph = ({ props }) => {
  useEffect(() => {
    const publicString = props.match.params.id;
    endpoint
      .get(`/graphs/${publicString}`)
      .then(response => console.log(response))
      .catch(e => alert("Failed to fetch graph data"));
  }, []);

  return <div>Graph!!</div>;
};

export default PublicGraph;
