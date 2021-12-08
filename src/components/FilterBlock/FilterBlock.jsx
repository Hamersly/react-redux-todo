import {filterAll, filterIsCompleted, filterIsNotCompleted} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {FilterButton, Filters} from "./FilterBlock.styles";

export const FilterBlock = () => {
  const flag = useSelector((state) => state.todos.flag)
  const dispatch = useDispatch()

  const flagCompleted = () => {
    if (flag === "FILTER_IS_COMPLETED") return "background-color: red;"
  }

  const flagAll = () => {
    if (flag === "FILTER_ALL") return "background-color: red;"
  }

  const flagNotCompleted = () => {
    if (flag === "FILTER_IS_NOT_COMPLETED") return "background-color: red;"
  }

  return (
    <Filters>
      <FilterButton
        onClick={() => dispatch(filterIsCompleted())}
        Color={flagCompleted}>
        Сделано
      </FilterButton>

      <FilterButton
        onClick={() => dispatch(filterAll())}
        Color={flagAll}>
        Всё
      </FilterButton>

      <FilterButton
        onClick={() => dispatch(filterIsNotCompleted())}
        Color={flagNotCompleted}>
        Ожидает
      </FilterButton>
    </Filters>
  )
};