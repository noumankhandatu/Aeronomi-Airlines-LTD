import { useEffect } from "react";
import { withRouter } from "react-router-dom";
// ScrollToTop Area
const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return props.children;
};

export default withRouter(ScrollToTop);
