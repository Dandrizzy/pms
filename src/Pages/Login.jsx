import styled from "styled-components";
import SignIn from "../Features/authentication/SignIn";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: clamp(1fr, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: rgb(79 70 229);
`;

function Login() {
  return (
    <LoginLayout>
      <p className=" text-slate-200 text-2xl font-bold">Log in to your account</p>
      <SignIn />
    </LoginLayout>
  );
}

export default Login;
