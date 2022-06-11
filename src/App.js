
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/About/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import ProjectDetails1 from './Components/Home/ProjectDetails/ProjectDetails1';
import ProjectDetails2 from './Components/Home/ProjectDetails/ProjectDetails2';
import ProjectDetails3 from './Components/Home/ProjectDetails/ProjectDetails3';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/projectDetails1' element={<ProjectDetails1></ProjectDetails1>}></Route>
        <Route path='/projectDetails2' element={<ProjectDetails2></ProjectDetails2>}></Route>
        <Route path='/projectDetails3' element={<ProjectDetails3></ProjectDetails3>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
