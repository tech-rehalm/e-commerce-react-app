export default function CategoryForm({
    value,
    setValue,
    handleSubmit,
    buttonText="Submit",
    handleDelete
}) {
  return (
    <div className="p-3">
        <form className="space-y-3" onSubmit={handleSubmit}>
            <input type="text" className="p-y-3 px-4 border rounded-lg w-full text-indigo-800" value={value} onChange={e => setValue(e.target.value)} placeholder="Write category name" />
            <div className="flex justify-between">
                <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">{buttonText}</button>

                {handleDelete && (
                    <button onClick={handleDelete} className="bg-red-500 text-white py-2 px4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Delete</button>
                )}
            </div>
        </form>
    </div>
  )
}