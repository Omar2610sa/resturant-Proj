import Error404Page from "@/components/shared/errors/404ErrorPage";


export default function NotFound() {
    return (
        <main className="flex container flex-col items-center justify-center  space-y-6">
            <Error404Page />
        </main>
    );
}