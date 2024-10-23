import React from "react";
import Mints from "./Mints";
import {use} from 'react'

const page = ({params}:{params:Promise<{userID:string}>}) => {
  const {userID} =  use(params)

  return (
    <section>
      <Mints id={userID} />
    </section>
  );
};

export default page;
