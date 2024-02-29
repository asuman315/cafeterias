import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Alert from '../Alert';
import axios from 'axios';
//import { useDispatch } from 'react-redux';
//import { authActions } from '../../store/authSlice';

function Login() {
  return <LoginForm />;
}

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alert, setAlert] = useState({
    show: false,
    status: '',
    msg: '',
  });

  //const dispatch = useDispatch();
  const clientInfo = { email, password };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      //post the client login info to the server
      const response = await axios.post(
        'https://asuman-sounds-api.herokuapp.com/auth/login',
        JSON.stringify(clientInfo),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      //Store userId in the redux store
      const userId = response.data.user.userId;
      console.log('userId', userId);
      
     // dispatch(authActions.setUserId(userId));

      setAlert({ show: true, status: 'error', msg: 'Login successfull!' });

      setEmail('');
      setPassword('');

      //Set logged-in status to true
      //sessionStorage.setItem('isloggedIn', true);
    } catch (error: any) {
      setAlert({ show: true, status: 'danger', msg: error?.response?.data?.msg ?? 'An error has occured' });
    }
  };

  const togglePassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  //border-2 h-[80vh] absolute bg-primary-11 w-screen bottom-0 lg:h-[70vh]
  //Svg is from gatwaves.io
  return (
    <section className='pt-16 sm:flex flex-col items-start bg-primary-2 h-screen'>
      <div className='max-w-lg w-[90vw] mx-auto relative top-10 lg:top-0 shadow-md'>
        <form
          onSubmit={handleSubmit}
          className=' bg-white pt-10 w-full px-8 rounded-t-lg relative'>
          <div className='absolute w-full left-0 z-30'>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
          </div>
          <h1 className='text-3xl text-left'>Sign in to Cafeteriase</h1>
          <div className='flex flex-col pt-4'>
            <label htmlFor='email' className='text-sm font-medium'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              className='pl-3 py-3 font-medium tracking-wider mt-1 rounded-sm bg-primary-2'
            />
          </div>
          <div className='flex flex-col pt-4'>
            <label htmlFor='password' className='text-sm font-medium'>
              Your Password
            </label>
            <div className='flex justify-between items-center bg-primary-3 relative mt-1'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='pl-3 py-3 font-medium tracking-wider rounded-sm bg-primary-2 w-full'
                required
              />
              {showPassword ? (
                <FaEye
                  id='password-eye'
                  onClick={togglePassword}
                  className='absolute right-1 lg:cursor-pointer'
                />
              ) : (
                <FaEyeSlash
                  id='password-eye'
                  onClick={togglePassword}
                  className='absolute right-1 lg:cursor-pointer'
                />
              )}
            </div>
          </div>
          <button className='capitalize bg-primary-3 w-full rounded py-3 my-6' type='submit'>sign in</button>
        </form>
        <div className='px-8 pt-4 bg-primary-12 pb-4 sm:flex rounded-b-lg'>
          <p className='font-medium mr-2'>New to cafeteriase?</p>
          <p
            className='font-medium text-secondary-7 lg:cursor-pointer'
            onClick={() => router.push('/auth/signup')}>
            Create your free account now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
