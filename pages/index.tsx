import type { NextPage } from "next";
import LatestArticles from "@/modules/Home/LatestArticles";

const Home: NextPage = () => {
  return (
    <div>
      <LatestArticles />
    </div>
  );
};

export default Home;
