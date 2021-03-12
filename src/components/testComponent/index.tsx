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
        console.log("useEffect")
    }, [])

    const [data, setData] = useState(null)
    const [name, setname] = useState("react")

    const onaddFn = useCallback((): void => {
        // setData(2)
        console.log("click")
        onAdd()
    }, [setData])
    const changeName = (name) => {
        console.log('11')
        return name + `改变${name}方法`
    }
    const otherName = useMemo(() => changeName(name), [name])
    return (
        <div>
            this is test page
            <p>{loginInfo}</p>
            <p> <button onClick={onaddFn}>增加 </button></p>
            <p>{otherName}</p>
            <p>{Math.abs(~2020)}</p>
        </div>
    )
}

export default memo(Test)