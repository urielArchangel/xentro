import React from 'react'
import Data from './Data'

const page = ({ params }: { params: { userID: string } }) => {
  return (
    <section>
      <Data id={params.userID} />
    </section>
  )
}

export default page