import React from "react";
import {filterAll, filterIsCompleted, filterIsNotCompleted} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {FilterButton, Filters} from "./FilterBlock.styles";

export const FilterBlock = (props) => {
  const flag = useSelector((state) => state.todoReducer.flag)
  const dispatch = useDispatch()

  return (
    <Filters>
      {flag === "FILTER_IS_COMPLETED" ?
        <FilterButton
          onClick={() => dispatch(filterIsCompleted())}
          Color={"background-color: red;"}>
          Сделано
        </FilterButton> :
        <FilterButton onClick={() => dispatch(filterIsCompleted())}>
          Сделано
        </FilterButton>
      }

      {flag === "FILTER_ALL" ?
        <FilterButton
          onClick={() => dispatch(filterAll())}
          Color={"background-color: red;"}>
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
          Color={"background-color: red;"}>
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