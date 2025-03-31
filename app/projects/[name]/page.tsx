import React from "react";

const Project = (props: { params: { name: string } }) => {
  const name = props.params.name;

  return <div>{name}</div>;
};

export default Project;
