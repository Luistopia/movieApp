// FilterDropdown.jsx
import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


function FilterDropdown({ title, options }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id={`dropdown-${title.toLowerCase()}`}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className="bg-dark text-light dropdown-menu"> {}
        {options.map((option) => (
          <Dropdown.Item key={option.id}>
            <Link to={option.link}>{option.label}</Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdown;


