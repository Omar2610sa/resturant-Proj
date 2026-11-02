import Link from "next/link";
type Props = {
  title: string;
  link: string;
};
export default function ErrorButton({ title, link }: Props) {
  return (
      <Link href={link} className="rounded-xl bg-primary px-5 py-2.5 font-bold text-white shadow-sm transition-all  hover:bg-primary"
      >
        {title}
      </Link>
  );
}
