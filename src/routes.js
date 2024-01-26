import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communities from './pages/Communities';
import NewUpdate from './pages/NewUpdate';

export default function CommunitiesRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Communities/>} />
        <Route path="/newupdate/:community_id" element={<NewUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}