import type { NextPage } from "next";
import WindowFirst from "../components/windowFirst/WindowFirst";
import WindowSecond from "../components/windowSecond/WindowSecond";

import { withLayout } from "../Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <WindowFirst />
      <WindowSecond />
    </div>
  );
};

export default withLayout(Home);
