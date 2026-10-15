import Search from "@/components/common/Search";
import AllActivity from "@/components/main/AllActivity";
import BestActivity from "@/components/main/BestActivity";
import KeyVisual from "@/components/main/KeyVisual";

export default function Main() {
  return (
    <div className="main-wrap">
      <KeyVisual />
      <div className="main-inner">
        <Search />
        <BestActivity />
        <AllActivity />
      </div>
    </div>
  );
}
