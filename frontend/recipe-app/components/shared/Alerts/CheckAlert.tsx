import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const CheckAlert = ({ title }: { title: string }) => {

    return Swal.fire({
        title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        customClass: {
            popup: 'rounded-2xl shadow-2xl bg-accets dark:bg-slate-900 border border-slate-200 dark:border-slate-700',
            title: 'text-xl font-black text-slate-800 mb-4',
            confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 mx-2',
            cancelButton: 'bg-white hover:bg-primary/10 text-slate-800 font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 mx-2'
        },
        buttonsStyling: false,
    });
}