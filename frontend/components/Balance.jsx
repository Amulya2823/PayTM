export const Balance = ({value}) => {
    return <div className="flex justify-center mt-8">
        <div className="font-bold text-lg">
            Your Balance
        </div>
        <div className="font-bold text-lg ml-20">
            Rs {value}
        </div>
    </div>
}