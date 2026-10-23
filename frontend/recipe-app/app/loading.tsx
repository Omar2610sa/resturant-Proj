import { PropagateLoader } from "react-spinners";


export default function loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <PropagateLoader color="#e95432" size={20} />
        </div>
    )
}
