import { HeadingProps } from "./heading-props";
import style from "./heading.module.css";

const Heading = ({tag, children }: HeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={style.h1}>{children}</h1>;
    case "h2":
      return <h2 className={style.h2}>{children}</h2>;
    case "h3":
      return <h3 className={style.h3}>{children}</h3>;
    default:
      <>{children}</>;
  }
};

export default Heading;