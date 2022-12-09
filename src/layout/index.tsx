import React, { FC } from "react";
import { CircleIconButton } from "../components/Button";
import Footer from "./Footer";
import Header from "./Header";
import { BsChevronUp } from "react-icons/bs";
import { useScrollToTop } from "../hooks/useScrollToTop";

interface ILayout {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout: FC<ILayout> = ({ children }) => {
  const { handleScrollToTop } = useScrollToTop();

  return (
    <main>
      <Header />
      {children}
      <Footer />
      <div className="fixed right-24 bottom-36">
        <CircleIconButton
          onClick={handleScrollToTop}
          icon={<BsChevronUp size={20} />}
        />
      </div>
    </main>
  );
};

export default Layout;
