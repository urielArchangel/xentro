'use client';

import { twitterHandleLink } from '@/app/src/data/constants';
import { message } from 'antd';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function  TwitterFollowChecker({taskID}:{taskID:number}) {
  const { data: session } = useSession();
  console.log({session})
  const checkFollow = async () => {
    if(!session){
    await signIn('twitter',{redirect:false})
    }
    if (session && session.user) {
        console.log({session})
      try {
        const res = await fetch(`/api/checkFollow?userId=${session.user.id}`);
        const [isFollowing,error] = await res.json();
        if(error){
          message.error(error,2)
          return
        }
        if(!isFollowing){
          message.error("Task not completed",2)
        }
        message.success("Task completed!",3)
        await signOut()
      } catch (error) {
        console.error('Error checking follow status:', error);
      }
    } else {
      alert('Please log in to check follow status.');
    }
  };

  return (
    <div className='text-lg'>
      <h1 className='text-2xl font-semibold'>Task {taskID}</h1>
      <h2>Follow the twitter account below</h2>
      <Link target='_blank' className='text-blue-500' href={twitterHandleLink}>@joinXentro</Link>
      <button className='mx-auto my-6 block bg-blue-500 text-white p-4 rounded-lg w-full max-w-[250px]' onClick={checkFollow}>
        I have done this task
      </button>
    </div>
  );
}
