export const InputBox = ({label , placeholder}) => {
    return <div >
    <div className="text-blue-500 font-semibold text-left py-2">
        {label}
    </div>
    <input placeholder = {placeholder} className="rounded-lg border-blue-300 px-2 py-1"></input>
    </div>
}