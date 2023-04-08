
const EditButton = ({ isEdit, setIsEdit, handleUpdate }) => (
    <div className="flex justify-end">
        {!isEdit && (
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded" onClick={() => setIsEdit(true)}>
                Edit
            </button>
        )}
        {isEdit && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>
                Save
            </button>
        )}
    </div>
)

export default EditButton