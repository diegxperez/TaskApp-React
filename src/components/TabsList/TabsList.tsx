import type { FilterType } from "../../interfaces/filters.type";
import type { TaskCounts } from "../../interfaces/task.interface";
import { cn } from "../../utils/className";
import s from "./TabsList.module.css";

interface Props {
  onFilterChange: (filter: FilterType) => void;
  currentFilter: FilterType;
  taskCounts?: TaskCounts;
}

export const TabsList: React.FC<Props> = ({
  onFilterChange,
  currentFilter,
  taskCounts,
}) => {
  return (
    <div className={s.tabslist}>
      <button
        className={cn(s.tab, currentFilter === "all" && s.tab__selected)}
        onClick={() => onFilterChange("all")}
      >
        All tasks ({taskCounts?.all})
      </button>
      <button
        className={cn(s.tab, currentFilter === "completed" && s.tab__selected)}
        onClick={() => onFilterChange("completed")}
      >
        Completed ({taskCounts?.completed})
      </button>
      <button
        className={cn(s.tab, currentFilter === "pending" && s.tab__selected)}
        onClick={() => onFilterChange("pending")}
      >
        Pending ({taskCounts?.pending})
      </button>
    </div>
  );
};
