import React from "react";
import Mints from "./Mints";

const page = ({params}:{params:{userID:string}}) => {
  return (
    <section>
      <Mints id={params.userID} />
    </section>
  );
};

export default page;
