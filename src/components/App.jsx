import { LoginForm } from './Form/Form';
export const App = () => {
  return (
    <>
      <LoginForm onSubmit={values => console.log(values)} />
    </>
  );
};
