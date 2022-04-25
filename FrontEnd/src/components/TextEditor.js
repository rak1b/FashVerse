import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
// https://www.youtube.com/watch?v=cevL8_Rsmuc&ab_channel=DEV_PIE
// https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/react.html

const TextEditor = () => {
    return (
        <div>
            <div className="App">
                <h2>Using CKEditor 5 from online builder in React</h2>
                <CKEditor
                    editor={Editor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </div>
    )
}

export default TextEditor;
