import MarkdownEditor from "./component/MarkdownEditor";
import Title from "./component/Title";
import Container from "./component/Container";

function App() {
    return (
        <div className="App">
            <Container>
                <Title text={'This is MarkdownEditor'}/>
                <MarkdownEditor onContentChange={console.log}/>,
            </Container>
        </div>
    );
}

export default App;

