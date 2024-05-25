import { Link } from "react-router-dom"

export const BottomWarning = ({label , buttonText , to}) => {
    return <div className="flex justify-center font-semibold py-2 text-slate-1000 text-lg">
    <div>
       {label}
    </div>
    <Link to={to} className="pointer underline pl-1 cursor-pointer">
        {buttonText}
    </Link>
    </div>
}
