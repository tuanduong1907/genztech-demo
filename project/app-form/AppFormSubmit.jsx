import styled from "styled-components";

// Styles
const FormSubmitStyles = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.multiple ? "20px" : "unset")}; ;
`;

const AppFormSubmit = ({ multiple, children, ...props }) => {
  return (
    <FormSubmitStyles multiple={multiple} {...props}>
      {children}
    </FormSubmitStyles>
  );
};

export default AppFormSubmit;
