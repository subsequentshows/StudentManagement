import React from "react";
import Table from "./components/Table";
import AddNew from "./components/AddNew";

function App() {
  return (
    <div className="main">
      <div className="container">
        <h1>Danh sách học viên</h1>
        <div className="table-container">
          <a href="/">
            <button className="add-btn">
              <i className="fas fa-plus-circle add-icon" /> Thêm học viên
            </button>
          </a>

          <Table
            name="Họ tên"
            year="Năm sinh"
            email="Email"
            phone="Số điện thoại"
            customize=""
          />

          <Table
            name="Unnamed"
            year="01/01/1999"
            email="unnamed@gmail.com"
            phone="0xxxx"
            customize=""
          />

          <Table
            name="qwqwfqw"
            year="211"
            email="wqd@fwef.com"
            phone="123213"
            customize=""
          />

          <Table
            name="qwqwfqw"
            year="211"
            email="wqd@fwef.com"
            phone="123213"
            customize=""
          />
        </div>
      </div>

      <AddNew />
    </div>
  );
}

export default App;
