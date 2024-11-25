import React from 'react'
import EditTask from './EditTask'
import { ITask } from '@/declarations'

const EditTaskModal = ({task}:{task:ITask}) => {
  return (
   <section >
    <EditTask task={task} />
   </section>
  )
}

export default EditTaskModal