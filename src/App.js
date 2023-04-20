import './App.css';
import MainLayout from "./MainLayout/MainLayout";
import todoData from "./todoData/todoData";




function App() {
  if (!(localStorage.getItem('todoData'))) {
    localStorage.setItem('todoData', JSON.stringify(todoData))
    console.log('else')
  }

  return (
      < MainLayout />
  );
}

export default App;
