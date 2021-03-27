import React from "react";

function Table(props) {
  return (
    <table className="list-table">
      <tbody>
        <tr className="custom-table">
          <th className="name">{props.name}</th>
          <th className="year">{props.year}</th>
          <th className="email">{props.email}</th>
          <th className="phone">{props.phone}</th>
          <th className="customize" >{props.customize}
            <button class="edit-btn">
              <i class="fas fa-edit"></i>Chỉnh sửa
            </button>
            <button class="remove-btn">
              <i class="fas fa-trash-alt"></i>Xóa
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
