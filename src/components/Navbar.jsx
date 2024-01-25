import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between rounded-full items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={'/'}>Todo App</Link>
      <Link className="bg-white p-2 rounded" href={'/addTopic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar
