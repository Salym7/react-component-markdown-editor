import Editor from '@toast-ui/editor';
import {useEffect} from "react";
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

const MarkdownEditor = (props) => {

    useEffect(() => {
        const editor = new Editor({
            el: document.querySelector('#editor'),
            height: '600px',
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            props.onContentChange(content)
        });
    }, [])


    return (
        <>
            <div id="editor"></div>
        </>
    )
}

export default MarkdownEditor