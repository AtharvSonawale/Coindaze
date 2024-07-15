import React from 'react';

function Textinput() {
    return (
        <div>
            <h1>This is the text input</h1>
            <input type="text" name="" id="text-input" className='bg-slate-600'/>
            <button type="submit" className='border border-blue-500 p-1'>Submit</button>
        </div>
    );
}

export default Textinput;