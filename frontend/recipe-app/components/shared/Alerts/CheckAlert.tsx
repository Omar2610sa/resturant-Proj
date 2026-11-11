import Swal from "sweetalert2";

export const CheckAlert = ({
    title,
    confirmButtonText,
    cancelButtonText,
}: {
    title: string;
    confirmButtonText: string;
    cancelButtonText: string;
}) => {

    return Swal.fire({
        title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText,
        cancelButtonText,
        background: 'auto',
        customClass: {
            popup: 'rounded-2xl shadow-2xl bg-accet dark:bg-slate-900 border border-slate-200 dark:border-slate-700',
            title: 'text-xl font-black text-slate-800 mb-4',
            confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 mx-2',
            cancelButton: 'bg-white dark:bg-white dark:hover:bg-white/40 text-slate-800 dark:text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 mx-2'
        },
        buttonsStyling: false,
    });
}