import React from 'react'
import Data from './Data'
import { fetchUsers } from '@/app/src/BE/helpers'
import { redirect } from 'next/navigation'

const page = async({ params }: { params: Promise<{ userID: string }> }) => {
  const {userID} = await params
  const user =  (await fetchUsers()).filter(user=>user.ID == userID)[0]
  if(!user){
    redirect("/admin/app/data")
  }

  return (
    <section>
      <Data userString={JSON.stringify(user)} />
    </section>
  )
}

export default page