export function SectionTitle({nameCategory, title}) {
  return (
    <>
    <div className="flex-row">
        <p className="flex text-red-500 gap-2 font-semibold">
        <div className="border-x-8 border-red-500 rounded text-red-500 text-2xl"></div>
           {nameCategory}</p>
        <h2 className="flex font-bold text-2xl">{title}</h2>
    </div>
    </>
  )
}
