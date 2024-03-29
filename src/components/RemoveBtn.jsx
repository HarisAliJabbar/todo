"use client"

import { HiOutlineTrash } from 'react-icons/hi'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
const RemoveBtn = ({ id }) => {

  const router= useRouter()

  const removeTopic = async () => {
    const confirmed = confirm('are you sure')
    if (confirmed) {
      toast.success("Delete Successfully")
    const res= await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE',
      })
      if(res.ok){
        router.refresh()
      }
    }
  }
  return <button onClick={removeTopic} className='text-red-500'>

    <HiOutlineTrash size={24} />
  </button>
}

export default RemoveBtn
