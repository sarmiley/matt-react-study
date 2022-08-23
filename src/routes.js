import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import loadable from '@loadable/component'
import Home from '../src/pages/Home'
import Private from './pages/Private'

// 使用動態載入方式(code splitting)，避免剛訪問網站時就取得整包不一定會用到的 js 檔案
// 請依照頁面類型分組，打包會依照分組獨立成一份以 webpackChunkName 設定名稱之 js 檔案

const ShowPokemon = loadable(() =>
  import(/* webpackChunkName: "feature" */ './pages/Private/ShowPokemon'),
)

const routes = [
  /* [公開頁面] */
  { path: '/', element: <Navigate to="home" /> },
  { path: 'home', element: <Home /> },

  { path: 'private', element: <Private />,
    children: [
      { path: 'show', element: <ShowPokemon /> },
    ]
  },

  { path: '*', element: <Navigate to="home" /> },

]

const Routes = () => useRoutes(routes)

export default Routes
