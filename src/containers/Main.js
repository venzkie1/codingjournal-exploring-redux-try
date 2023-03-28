import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DiaryForm from "../components/DiaryForm";
import { addItem, deleteItem, updateItem } from "../redux/actions";
import DiaryItem from "../components/DiaryItem";
import { Modal } from "react-bootstrap";


const Main = (props) => {
  const { addItem, diaryItems, deleteItem, updateItem } = props;
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  
  useEffect(() => {
    console.log("updated Item", diaryItems);
  }, [diaryItems]);

  const onUpdate = () => {
    console.log(activeItem);
    let itemObject = {
      id: activeItem.id,
      title: title,
      date: date,
  }
    updateItem(itemObject)
    setShow(false);
    // setTitle("");
    // setDate("");
  }
    // const { show, activeItem } = state
    return (
      <div>
        <h1 className="HEADTITLE">KEBS CODING JOURNAL</h1>
        <div className="grid-container">
          <div className="diary-app">
            <h1>TASK</h1>
            <DiaryForm addItem={(item) => addItem(item)} />
          </div>
          <div className="diary-app" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return (
                  <DiaryItem
                    deleteItem={(id) => deleteItem(id)}
                    updateItem={(id, item) => updateItem(id, item)}
                    showModal={(item) => {
                      setShow(true);
                      setActiveItem(item);
                      setTitle(item.title);
                      setDate(item.date);
                    }}
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1>No Items</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Add a Task" className="diary-input"/>
          <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="diary-date-input"/>

          </Modal.Body>
          <Modal.Footer><button type="submit" onClick={() => onUpdate()}> Update </button></Modal.Footer>
        </Modal>
      </div>
    );
  }


const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (id) => dispatch(deleteItem(id)),
  updateItem: (id, item) => dispatch(updateItem(id, item))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
