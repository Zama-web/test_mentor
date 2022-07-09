import './App.css';
import CreateTitle from './components/createTitle/CreateTitle';

function App() {
  return (
    <div className="App">
      <CreateTitle/>
    </div>
  );
}

export default App;


/* tasks
* Написать компонент для создания заголовков Title, где мы передаем текст заголовка, 
  размер и цвет (черный по дефолту, красный или синий)  

* Написать компонент для простых Input, который принимает type (text, password...), 
  placeholder, value. (Оформи как и Bootstrap инпуты)
*/