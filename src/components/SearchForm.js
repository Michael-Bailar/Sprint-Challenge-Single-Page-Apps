import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";

import styled from "styled-components";

const StyledSearchForm = styled.div`
  text-align: center;
  margin-bottom:5%;
`

const SearchForm = ({values, status, query, handleInputChange}) => {
    
    const [chars, setChars] = useState([]);

    useEffect(() => {
        status && setChars(chars => [...chars, status]);
    }, [status]);

    return (
        <StyledSearchForm className="search-form">
            <Form >
                <label htmlFor="name">
                    Search by name:
                    <Field 
                        id="name"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        name="name"
                        placeholder="name"
                    />
                </label>    
            </Form> 
        </StyledSearchForm>
    );
};

const FormikSearchForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || ""
        }
    },


//     handleSubmit(values, { setStatus, resetForm }) {
//         console.log("submitting", values);
//         axios
//             .post("https://reqres.in/api/users", values)
//             .then(result => {
//                 console.log("success", result);
//                 setStatus(result.data);
//                 resetForm();
//             })
//             .catch(error => console.log(error.response));
//     }
})(SearchForm);

export default FormikSearchForm;