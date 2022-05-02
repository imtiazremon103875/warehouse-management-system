import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import EquipmentDetail from './Pages/EquipmentDetail/EquipmentDetail';
import Footer from './Pages/Shared/Footer/Footer';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Blogs from './Pages/Blogs/Blogs';
import AddItem from './Pages/AddItem/AddItem';


function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<EquipmentDetail></EquipmentDetail>}></Route>
        <Route path="/manageInventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>


      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
