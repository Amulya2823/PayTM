export const Balance = ({amount}) => {
    return <div className="flex justify-center mt-8">
        <div className="font-bold text-lg">
            Your Balance
        </div>
        <div className="font-bold text-lg ml-20">
            Rs 10,000{amount}
        </div>
    </div>
}