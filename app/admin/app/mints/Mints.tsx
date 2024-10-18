import React from 'react'
import MintsOverview from './MintsOverview'
import MintsLog from './MintsLog'

const Mints = () => {
  return (
    <section className="text-4xl text-black  ">
      <MintsOverview />
      <MintsLog />
    </section>
  )
}

export default Mints