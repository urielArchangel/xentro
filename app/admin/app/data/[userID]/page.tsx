import React from 'react'
import Data from './Data'

const page = async({ params }: { params: Promise<{ userID: string }> }) => {
  const {userID} = await params
  return (
    <section>
      <Data id={userID} />
    </section>
  )
}

export default page