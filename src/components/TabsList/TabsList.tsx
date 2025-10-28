import { cn } from "../../utils/className";
import s from "./TabsList.module.css";

export const TabsList = () => {
  return (
    <div className={s.tabslist}>
      <button className={cn(s.tab, s.tab__selected)}>All tasks</button>
      <button className={s.tab}>Completed</button>
      <button className={s.tab}>Pending</button>
    </div>
  );
};
