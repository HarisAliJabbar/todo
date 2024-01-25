import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from 'react-icons/hi'


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000//api/topics", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch Topics")
    }
    return res.json();


  } catch (error) {
    console.log("Error loading topics", error)

  }

}
const TopicsList = async () => {

  const { topics } = await getTopics()

  return (
    <>
      {
        topics?.map((items) => {
          const dateObject = new Date(items.createdAt);
          const formattedDate = dateObject.toLocaleDateString();
          const formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return <div key={items._id} className="p-4 border rounded  border-slate-300 my-1 flex justify-between gap-5 items-center">
            <div>
              <h2 className="font-bold text-2xl text-gray-700">{items.title}</h2>
              <h2 className="text-gray-500">{items.description}</h2>
              <span className="text-red-400">{formattedDate}</span>  <span>{formattedTime}</span>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <RemoveBtn id={items._id} />
              <Link className="text-green-500" href={`/editTopic/${items._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        })
      }
    </>
  )
}

export default TopicsList
