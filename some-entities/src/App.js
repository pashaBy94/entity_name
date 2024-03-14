import './App.css';
import ListEntityView from './components/ListEntityView/ListEntityView';
import SingleEntityView from './components/SingleEntityView/SingleEntityView';
import QueryView from './components/QueryView/QueryView';
import CreatorEntityView from './components/CreatorEntityView/CreaterEntityView';
import EntityCanvas from './components/EntityCanvas/EntityCanvas';
function App() {
    return (
        <div className="App">
            <h1 className="App__title">Entities Management</h1>
            <ListEntityView />
            <hr />
            <SingleEntityView />
            <hr />
            <QueryView />
            <hr />
            <CreatorEntityView />
            <hr />
            <EntityCanvas />
        </div>
    );
}

export default App;
