import styled from "styled-components";

// Styles
const FormStyles = styled.form`
`;

const AppForm = (props) => {
  return (
    <FormStyles autoComplete="off" {...props}>
      {props.children}
    </FormStyles>
  );
};

export default AppForm;
