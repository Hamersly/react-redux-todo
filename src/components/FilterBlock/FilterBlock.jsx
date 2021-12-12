import {filterAll, filterIsCompleted, filterIsNotCompleted} from "../../store/todo/actions";
import {useDispatch, useSelector} from "react-redux";
import {AllFilterButton, CompletedFilterButton, Filters, IsNotCompletedFilterButton} from "./FilterBlock.styles";

export const FilterBlock = () => {
  const flag = useSelector((state) => state.todos.flag)
  const dispatch = useDispatch()

  return (
    <Filters>
      <CompletedFilterButton
        onClick={() => dispatch(filterIsCompleted())}
        Color={flag}>
        Сделано
      </CompletedFilterButton>

      <AllFilterButton
        onClick={() => dispatch(filterAll())}
        Color={flag}>
        Всё
      </AllFilterButton>

      <IsNotCompletedFilterButton
        onClick={() => dispatch(filterIsNotCompleted())}
        Color={flag}>
        Ожидает
      </IsNotCompletedFilterButton>
    </Filters>
  )
};