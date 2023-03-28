import React, { useState } from 'react'

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text,
            text2: text2
        }
        addItem(itemObject)
        setTitle("");
        setText("");
        setText2("");
        setDate("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="diary-form">
                    <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add a Task" className="diary-input"/>
                    <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="diary-date-input"/>
                </div>
                <h1 className='Thoughts'>Thoughts of the day!</h1>
                <textarea value={text} onChange={(event) => setText(event.target.value)} rows="2" className="diary-textarea" placeholder='Please stop thinking of riley reid!!!'>
                </textarea>
                <button type="submit" className="diary-button">Add</button>
            </form>
        </div>
    )
}
