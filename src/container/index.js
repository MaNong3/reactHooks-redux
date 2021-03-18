import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dataList } from "../features/initialization"
import Test from "../components/testComponent/index.tsx"

export default function Initialization() {
  const dispatch = useDispatch();
  const { loginInfo } = useSelector(
    (state) => state.app
  );
  const handleAdd = () => {
    console.log("点击事件")
    dispatch(dataList())
  }
  return (
    <div>
      22222{loginInfo}
      <Test
        loginInfo={loginInfo}
        onAdd={handleAdd}
      />
    </div>
  )
}