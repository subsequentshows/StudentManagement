import React from "react";
import Table from "./components/Table";
import {useState, useEffect} from "react";


// import studentData from "./components/studentData";
import AddNew from "./components/AddNew";
import { Button, Tab } from "react-bootstrap";

function App() {
  const [students, setStudents] = useState([]);

  //
  useEffect(() => {
    (async function getStudents() {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setStudents(data);
    })();
  }, []);



  const studentComponents = students.map((student) => {
    return (
      <Table
        key={student.id}
        name={student.name}
        birthday={student.birthday}
        email={student.email}
        phone={student.phone}
      />
    );
  });

  return (
    <main>
      <div class="container">
        <h1>Danh sách học viên</h1>
        <div class="table-container">
          <a href="form.html">
            <button class="add-btn">
              <i class="fas fa-plus-circle add-icon"></i> Thêm học viên
            </button>
          </a>
          
          <table class="list-table">
            <tr>
              <th class="name">Họ tên</th>
              <th class="year">Năm sinh</th>
              <th class="email">Email</th>
              <th class="phone">Số điện thoại</th>
              <th class="customize">Thao tác</th>
            </tr>
          </table>

          {studentComponents}
        </div>
      </div>

      {/* <Body /> */}
    </main>
  );
}

export default App;
