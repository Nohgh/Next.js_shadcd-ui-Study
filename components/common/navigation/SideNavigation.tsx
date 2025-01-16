import { Button } from "@/components/ui/button";
import styles from "./SideNavigation.module.scss";
import { Search } from "lucide-react";

const SideNavigation = () => {
  return (
    <div className={styles.container}>
      {/* 검색창 */}
      <div className={styles.container__searchBox}>
        <Button variant={"outline"} size="icon">
          <Search className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SideNavigation;
