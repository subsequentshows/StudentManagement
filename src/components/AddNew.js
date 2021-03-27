import React from "react";

function AddNew() {
  return (
    <div className="container">
      <h1>Thêm mới học viên</h1>
      <form method="get" className="form-add">
        <div className="row">
          <label htmlFor="name">
            Họ tên <span className="require">*</span>
          </label>
          <input type="text" id="name" required />
        </div>

        <div className="row">
          <label htmlFor="year">Năm sinh</label>
          <input type="text" id="year" />
        </div>

        <div className="row">
          <label htmlFor="email">
            Email <span className="require">*</span>
          </label>
          <input type="email" id="email" required />
        </div>

        <div className="row">
          <label htmlFor="phone">
            Phone <span className="require">*</span>
          </label>
          <input type="text" id="phone" required />
        </div>

        <div className="btn-row">
          <a href="/">
            <button className="btn back-btn" type="button">
              <i className="fas fa-chevron-left" /> Quay lại
            </button>
          </a>
          <button className="btn save-btn" type="submit">
            <i className="fas fa-save" /> Lưu
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
