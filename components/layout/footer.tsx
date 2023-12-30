import Container from "../util/container";
import { FOOTER_LINKS } from "../../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderLinks = () => {
    const links = [];
    for (const [page, path] of Object.entries(FOOTER_LINKS)) {
      links.push(
        <a
          href={`${path}`}
          className="mx-3 font-bold hover:text-primary text-base-100 dark:text-neutral-content"
        >
          {page}
        </a>
      );
    }
    return links;
  };

  return (
    <footer className="bg-primary-content dark:bg-neutral-950 border-t" id="contact">
      <Container>
        <div className="py-20 flex flex-col justify-around px-2 lg:flex-row items-center">
          <h3 className="text-neutral-content text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            © {currentYear} Owens Ehimen
          </h3>
          <div className="flex flex-col justify-center items-center">
            <div className="lg:px-8 mb-10 lg:mb-0">{...renderLinks()}</div>
          </div>
          <a
            href="./notes"
            className="mx-3 bg-base-100 border hover:bg-primary hover:text-black border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors"
          >
            Read My Notes
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
