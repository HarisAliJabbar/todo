import EditTopicForm from "@/components/EditTopicForm"


const getTopicByID = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Could not find topic")
    }
    return res.json()
  } catch (error) {
    console.log(error)

  }

}

const editTopic = async ({ params }) => {
  const { id } = params;
  const { topics } = await getTopicByID(id)
  const { title, description } = topics;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  )
}

export default editTopic
