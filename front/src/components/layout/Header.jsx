import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const formHandler = async (e) => {
    e.preventDefault();
    navigate(`/search?searchKey=${searchKey}`);
    setSearchKey("");
  };
  return (
    <header className="p-3 shadow-lg border-bottom ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="" width="50" />
        </a>

        <form
          className="col-12 col-lg-5 mb-3 mb-lg-0 me-lg-3  d-flex  flex-column flex-md-row  align-items-stretch"
          role="search"
          onSubmit={formHandler}
        >
          <div className="where w-100">
            <input
              type="text"
              className="form-control  rounded-start rounded-0 h-100"
              aria-label="where"
              id="where"
              placeholder="Search hotels or city ..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" btn btn-search text-white rounded-0 rounded-end"
          >
            <BiSearch />
          </button>
        </form>

        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <a
              href="#"
              className=" link-body-emphasis text-decoration-none "
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bookmarks</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
{
  /* <header className="p-3 mb-3 border-bottom ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="" width="50" />
        </a>

        <form
          className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3  d-flex  flex-column flex-md-row  "
          role="search"
        >
          <div className="where form-floating">
            <input
              type="text"
              className="form-control  rounded-start rounded-0"
              aria-label="where"
              id="where"
            />
            <label forhtml="where">where</label>
            <div className="where-suggest"></div>
          </div>
          <div className="date-check-in form-floating">
            <input
              type="date"
              className="form-control rounded-0"
              id="check-in-date"
            />
            <label forhtml="check-in-date">Check in date</label>
          </div>
          <div className="check-out-date form-floating">
            <input
              type="date"
              className="form-control rounded-0"
              id="check-out-date"
            />
            <label forhtml="check-out-date">Check out date</label>
          </div>
          <div className="guests-number form-floating ">
            <input
              type="number"
              className="form-control rounded-0 "
              aria-label="guests-number"
              id="guests-number"
            />
            <label forhtml="guests-number">Who add guests</label>
            <div className="guests-number-suggest"></div>
          </div>
          <button className=" btn btn-search text-white rounded-0 rounded-end">
            <BiSearch />
          </button>
        </form>

        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <a
              href="#"
              className=" link-body-emphasis text-decoration-none "
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bookmarks</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header> */
}
