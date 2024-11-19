import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-9 p-44">
      <h1 className="text-6xl font-bold text-gray-900">404 - Not Found</h1>
        <p> Your visited page not found. You may go home page</p>
        <Link to="/"
          className=" w-[100px] bg-red-500 flex justify-center text-white py-1 rounded-md hover:bg-red-600 transition duration-300">
          Go Home</Link>
    </div>
  )
}
