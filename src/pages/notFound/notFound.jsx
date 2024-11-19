import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-9 p-44">
      <h1 className="text-6xl font-bold text-gray-900">404 - Not Found</h1>
        <p> Your visited page not found. You may go home page</p>
        <Link to="/"
          className=" w-[100px] h-10 bg-red-500 text-center flex items-center justify-center rounded hover:bg-red-400 hover:text-white">
          Go Home</Link>
    </div>
  )
}
