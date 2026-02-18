import { TodoListComponent } from './TodoListComponent/TodoListComponent';

//create your first component
const Home = () => {
    return (
        <div className="text-center">
            <TodoListComponent />
        </div>
    );
};

export default Home;
