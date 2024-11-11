import React from 'react'
import AllTasksComponent from './AllTasksComponent';
import { Metadata } from 'next';
import { fetchAppData } from '@/app/src/BE/helpers';
import airdropcss from '@/app/css/airdrop.module.css'

export const metadata: Metadata = {
    title: "All tasks | Airdrop | Xentro - Gateway to UNTRAD Banking",
  
    robots: { follow: false, index: false },
  };
const page =async () => {
    const app = await fetchAppData();
 
    return (
      <section className={airdropcss.tasksBody}>
   <AllTasksComponent appString={JSON.stringify(app)} />
   </section>
  )
}

export default page