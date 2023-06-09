import Link from "next/link";

const PrimaryButton = ({ url, text }) => {
  return (
    <button className="my-2 px-6 py-4  text-2xl text-white bg-green-600 rounded-lg">
      <Link href={url}>{text}</Link>
    </button>
  );
};

export default PrimaryButton;
