import React from "react";
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'

export default function DiaryItem({ item, showModal, deleteItem }) {
  return (
    <div className="diary-row">
      {/* <span onClick={() => showModal(item)}>{item.title}</span> */}
      <div>

         <div className="diary-form">
            <input disabled value={item.title}  className="diary-input"/>
            <input disabled value={item.date}  type="date" className="diary-date-input"/>
            <input disabled value={item.text}  type="text" className="diary-time-input"/>
            <TiEdit onClick={() => showModal(item)} className="update" style={{ color: "green" }}/> 
            <TiDeleteOutline onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red" }}/>
         </div>

        {/* <TiEdit onClick={() => updateItem(item.id)} className="update" style={{ color: "green" }}/> */}
        {/* <TiEdit onClick={() => showModal(item)} className="update" style={{ color: "green" }}/>
        <TiDeleteOutline onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red" }}/> */}
      </div>
    </div>
  );
}
