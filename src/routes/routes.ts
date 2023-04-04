import { lazy } from "react";

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string
}

const Lazy1 =lazy(() => import(/*webpackChunkName: "LazyPage1" */'../01-lazyLoad/pages/LazyPage1'));
const Lazy2 =lazy(() => import(/*webpackChunkName: "LazyPage2" */'../01-lazyLoad/pages/LazyPage2'));
const Lazy3 =lazy(() => import(/*webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: "/lazy",
    path: "/lazy",
    Component: Lazy1,
    name: "lazy-1"
  },
  {
    to: "/lazy2",
    path: "/lazy2",
    Component: Lazy2,
    name: "lazy-2"
  },
  {
    to: "/lazy3",
    path: "/lazy3",
    Component: Lazy3,
    name: "lazy-3"
  }
]