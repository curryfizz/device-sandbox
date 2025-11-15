import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';


const MainLayout = () => {
  return (
    <div className="flex h-screen bg-mainCanvas text-text">
      <Sidebar />
      <Canvas/>
    </div>
  );
};

export default MainLayout;
