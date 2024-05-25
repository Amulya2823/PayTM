export const Button = ({label , onClick}) => {
    return <button onClick={onClick} type="button" className=" font-semibold text-lg w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-2.5 me-4 mb-2">{label}</button>
}