import Container from "../util/container";
import { STATUS } from "../../lib/constants";

const Status = () => {
  return (
    <div className="bg-primary-content text-neutral-content dark:bg-neutral-950 dark:text-neutral-300">
      <Container>
        <div className="py-2 text-center text-sm">
          <div className="badge badge-primary badge-xs bg-green-400 rounded-full mx-2 animate-pulse"></div>
          {STATUS.current}{" "}
          <a
            href={STATUS.link}
            className="underline hover:text-primary duration-200 transition-colors"
          >
            Learn More
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Status;
