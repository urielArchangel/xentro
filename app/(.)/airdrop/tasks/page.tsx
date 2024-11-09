import React from 'react'
import AllTasksComponent from './AllTasksComponent';
import { Metadata } from 'next';
import { fetchAppData } from '@/app/src/BE/helpers';


export const metadata: Metadata = {
    title: "All tasks | Airdrop | Xentro - Gateway to UNTRAD Banking",
  
    robots: { follow: false, index: false },
  };
const page =async () => {
    const app = await fetchAppData();
 
    return (
   <AllTasksComponent appString={JSON.stringify(app)} />
  )
}

export default page