"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toast } from "react-hot-toast";
const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setnewTitle] = useState(title);
  const [newDescription, setnewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newTitle, newDescription })
      })
      if (!res.ok) {
        throw new Error('Failed to update topic')
      }
      router.push("/")
      router.refresh()
      toast.success('Updated Successfully')


    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e) => setnewTitle(e.target.value)} value={newTitle} className="border border-slate-500 rounded-lg px-6 py-2" type="text" name="" placeholder="Topic Title" />
        <input  onChange={(e) => setnewDescription(e.target.value)} value={newDescription} className="border rounded-lg border-slate-500 px-6 py-2" type="text" name="" placeholder="Topic Description" />
        <button className="bg-green-600 rounded-lg font-bold text-white py-3 px-6 w-fit">Update Topic</button>
      </form>
    </div>
  )
}

export default EditTopicForm
