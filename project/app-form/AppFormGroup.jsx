import styled from "styled-components";
import * as mixins from "../../shared/utils/mixin-styled";

// Styles
const FormGroupStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 30px;
  .form-label {
    ${mixins.text14}
    color: ${(props) => props.theme.lightGrayColor};
  }
`;

const AppFormGroup = ({ title, children, ...props }) => {
  return (
    <FormGroupStyles className="app-form-group" {...props}>
      {title && <label className="form-label">{title}</label>}
      {children}
    </FormGroupStyles>
  );
};

export default AppFormGroup;
