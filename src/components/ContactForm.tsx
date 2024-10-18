import { Typography } from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
};

const StyledForm = styled.form`
  padding: 18px;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 12px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const postFormData = async (data: Inputs) => {
    try {
      axios.post("http://demo6711498.mockable.io/submit-form", data);
      console.log("data sent");
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    postFormData(data);
  };

  return (
    <>
      <Typography variant="h2">Form</Typography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledContainer
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "space-between",
            margin: "12px",
          }}
        >
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            {...register("firstname", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "First Name must be less than 20 characters",
              },
            })}
          />
          {errors.firstname && (
            <ErrorMessage>{errors.firstname.message}</ErrorMessage>
          )}
        </StyledContainer>
        <StyledContainer>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            {...register("lastname", {
              required: "Last name is required",
              minLength: {
                value: 3,
                message: "Last name name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Last name Name must be less than 20 characters",
              },
            })}
          />
          {errors.lastname && (
            <ErrorMessage>{errors.lastname.message}</ErrorMessage>
          )}
        </StyledContainer>
        <StyledContainer>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </StyledContainer>
        <StyledContainer>
          <label htmlFor="message">Message</label>
          <input type="textarea" {...register("message", { required: true })} />
          {errors.message && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
        </StyledContainer>
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;
