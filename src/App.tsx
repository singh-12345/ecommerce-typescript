import {Route, BrowserRouter as Router,Routes } from "react-router-dom"
import  Sidebar  from "./component/Sidebar.tsx"
import MainContent from "./component/MainContent"
import ProductPage from "./component/ProductPage.tsx"
import TopSeller from "./component/TopSeller.tsx";
import PopularBlogs from "./component/PopularBlogs.tsx";


export default function App() {

  return  (

  <Router>
    <div className="flex h-screen">
      <Sidebar/>

      <div className="rounded w-full flex justify-between flex-wrap">
         <Routes>
          <Route path="/" element = {<MainContent/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
         </Routes>

        <div>
          <TopSeller/>
          <PopularBlogs/>
        </div>

      </div>
    </div>
  </Router>

  );
}