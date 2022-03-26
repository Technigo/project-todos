import React from "react";
import styled from "styled-components";

//Styled components
const Flex = styled.div`
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;

  .dropdown {
    color: rgb(0, 30, 108);
    color: #F76E11;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0 0 5px 5px;
    background-color: whitesmoke;
    border-top: none;
  }
  
  .dropdown:focus {
    outline: none;
  }

  .label {
    color: rgb(0, 30, 108);
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
    background-color: rgb(201, 204, 213);
    display: block;
    @media (min-width: 500px) {
    font-size: 1.2rem;
  }
  }

  @media (min-width: 500px) {
    width: 50%;
  }
`;

const AddCategory = ({ onAddCategory, category }) => {
  return (
    <Flex>
      <Section>
        <label htmlFor="category" className="label">
          Choose a category (optional)
        </label>

        <select
          onChange={onAddCategory}
          value={category}
          id="category"
          name="category"
          className="dropdown"
        >
          <option value="Work">Work</option>
          <option value="Health">Health</option>
          <option value="Family">Family</option>
          <option value="Housework">Housework</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </Section>
    </Flex>
  );
};
export default AddCategory;
