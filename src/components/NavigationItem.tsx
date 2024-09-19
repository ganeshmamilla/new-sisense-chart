import { Link } from "react-router-dom";

type Props = {
  href: string;
  text: string;
};

export default function NavigationItem({ href, text }: Props) {
  return (
    <li className="mb-1 text-gray-100 hover:text-white hover:bg-black hover:font-bold">
      <Link
        to={href}
        className="flex px-4 py-2 w-full h-full items-center"
        style={{ paddingTop: "0.1rem", paddingBlockStart: "0.1rem" }}
      >
        <span className="text-white">{text}</span>
      </Link>
    </li>
  );
}
