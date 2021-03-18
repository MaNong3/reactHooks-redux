import "./index.scss"
import React, { useState, useEffect, memo, useCallback, useMemo } from "react"
console.log("test Page")
interface propsType {
  loginInfo: String,
  onAdd: Function
}
function Test(props: propsType) {
  console.log(props, "props")
  const { loginInfo, onAdd } = props

  useEffect(() => {
    // 微宏任务运行
    console.log(1)
    setTimeout(() => {
      console.log(2)
    })
    queueMicrotask(() => console.log(3));//微任务
    new Promise((reslove, reject) => {
      console.log(4)
      reject()
      console.log(5)
    })
      .then(() => {
        console.log(6)
      }, () => {
        console.log(7)
      })
      .finally(() => {
        console.log(8)
      });
  }, [])

  const [data, setData] = useState(null)
  const [name, setname] = useState("react")

  const onaddFn = useCallback((): void => {
    // setData(2)
    console.log("click")
    onAdd()
  }, [setData])
  const changeName = (name) => {
    // console.log('11')
    return name + `改变${name}方法`
  }
  const otherName = useMemo(() => changeName(name), [name])
  return (
    <>
      <div className="divBox">
        this is test page
            <p>{loginInfo}</p>
        <p> <button onClick={onaddFn}>增加 </button></p>
        <p>{otherName}</p>
        <p>{Math.abs(~2020)}</p>
      </div>
      {/* <div className="bg_box">
        <p className="border-box">背景延伸到边框。</p>
        <p className="padding-box">背景延伸到边框的内部边缘。</p>
        <p className="content-box">背景仅延伸到内容盒的边缘。</p>
        <p className="text">背景被裁剪为前景文本。</p>
      </div> */}

    </>

  )
}

export default memo(Test)