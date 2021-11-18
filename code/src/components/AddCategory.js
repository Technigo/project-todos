import React from "react";

const AddCategory = ({ categoryStorage, setCategoryStorage }) => {
  const onAddCategory = (e) => {
    setCategoryStorage(e.target.value);
  };
  return (
    <div className="category-wrapper">
      <button
        onClick={(e) => onAddCategory(e)}
        className="btn-category housework"
        value="housework"
      >
        Housework
      </button>
      <button
        onClick={(e) => onAddCategory(e)}
        className="btn-category shopping"
        value="shopping"
      >
        Shopping
      </button>
      <button
        onClick={(e) => onAddCategory(e)}
        className="btn-category work"
        value="work"
      >
        Work
      </button>
    </div>
  );
};

export default AddCategory;
