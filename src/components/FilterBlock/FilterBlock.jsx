import {filterAll, filterIsCompleted, filterIsNotCompleted} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {FilterButton, Filters} from "./FilterBlock.styles";

export const FilterBlock = () => {
  const flag = useSelector((state) => state.todos.flag)
  const dispatch = useDispatch()

  return (
    <Filters>
      {flag === "FILTER_IS_COMPLETED" ?
        <FilterButton
          onClick={() => dispatch(filterIsCompleted())}
          color={"background-color: red;"}>
          Сделано
        </FilterButton> :
        <FilterButton onClick={() => dispatch(filterIsCompleted())}>
          Сделано
        </FilterButton>
      }

      {/*<FilterButton*/}
      {/*  onClick={() => dispatch(filterIsCompleted())}*/}
      {/*  {flag == "FILTER_IS_COMPLETED" && color = {"background-color: red;"}}>*/}
      {/*  Сделано*/}
      {/*</FilterButton>*/}

      {flag === "FILTER_ALL" ?
        <FilterButton
          onClick={() => dispatch(filterAll())}
          color={"background-color: red;"}>
          Всё
        </FilterButton> :
        <FilterButton
          onClick={() => dispatch(filterAll())}>
          Всё
        </FilterButton>
      }

      {flag === "FILTER_IS_NOT_COMPLETED" ?
        <FilterButton
          onClick={() => dispatch(filterIsNotCompleted())}
          color={"background-color: red;"}>
          Ожидает
        </FilterButton> :
        <FilterButton
          onClick={() => dispatch(filterIsNotCompleted())}>
          Ожидает
        </FilterButton>
      }
    </Filters>
  )
};