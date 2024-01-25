"use client"
import { toast } from 'react-hot-toast';
import { useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router= useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      // alert("all fields are required")
      toast.error('All fields are required')
      return
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({ title, description })
      })
      if(res.ok){
        router.push('/')
        toast.success('Topic added successfully');
        router.refresh('/')

      }

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
        <input onChange={(e) => setTitle(e.target.value)} value={title} className="rounded-lg border border-slate-500 outline-none px-6 py-2" type="text" name="" placeholder="Topic Title" />
        <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-slate-500 rounded-lg outline-none px-6 py-2" type="text" name="" placeholder="Topic Description" />
        <button className="rounded-lg bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
      </form>
    </div>
  )
}

export default Page
