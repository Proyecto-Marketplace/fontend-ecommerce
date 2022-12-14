import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema as FormValues } from '../../common/auth';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    shouldFocusError: true
  });

  const handleLogin: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
  }

  return (
    <>
      <form>
        <h1>Login</h1>

        <label>
          Email
          <input type='email' />          
        </label>

        <label>
          Password
          <input type='password' />
        </label>

        <button type='submit'>Sign in</button>

        <p>
          Do not have an account ?
          <Link href='/auth/register'>Click here</Link>
        </p>

      </form>
    </>
  )
}

export default Login