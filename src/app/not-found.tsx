import Link from "next/link";
import Container from "./components/Container";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";

function NotFound() {
  return (
    <Container>
      <Title title="404 Not Found" />

      <Paragraph>
        This page doesn&#39;t exist. Please navigate to another page by clicking
        a link in the header or using the button below.
      </Paragraph>
      <button
        type="submit"
        className="block mx-auto border p-4 mb-8 bg-playstation text-white rounded-full hover:bg-blue-900 transition-colors duration-200 shadow-md shadow-playstation"
      >
        <Link href="/">Return Home</Link>
      </button>
    </Container>
  );
}

export default NotFound;
