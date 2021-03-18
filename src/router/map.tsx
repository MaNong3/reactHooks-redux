import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Routes from "./routers"
export default function RouterView(props) {
  const { routes } = props
  const RouterArr = routes === undefined ? Routes : routes;
  const newRouter = <Route path="/" component={() => {
    return <Redirect to="/test">
    </Redirect>
  }} exact key={0}></Route>
  return (
    <div>
      <Switch>
        {
          RouterArr.map((item, index) => {
            const Copm = item.component;
            return <Route path={item.path} key={index} component={(api) => {
              return <Copm routes={item.children} {...api}></Copm>
            }}></Route>
          }).concat(newRouter)
        }
      </Switch>

    </div>

  )
}