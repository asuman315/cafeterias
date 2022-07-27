import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import Alert from '../Alert';
//import { useSelector, useDispatch } from 'react-redux';
//import { authActions } from '../../store/authSlice';
import { useRouter } from 'next/router';

const Signup = () => {
  return <SignupForm />;
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, status: '', msg: '' });

  const userInfo = {
    name,
    email,
    password,
  };

  //grab the id of the clicked product
 // const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://asuman-sounds-api.herokuapp.com/auth/signup',
        JSON.stringify(userInfo),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      setAlert({
        show: true,
        status: 'success',
        msg: 'Account created successfully!',
      });

      //console.log(response.data);

      setEmail('');
      setPassword('');
      setName('');

      //Set logged-in status to true
    //  sessionStorage.setItem('isloggedIn', true);
      const cartItems = localStorage.getItem('cartItems');
      // Push the user to the checkout page if they have items in their cart
      if (cartItems) {
        router.push('/checkout/shipping');
      }

      //Store userId in the redux store
     const userId = response.data.user.userId;
     console.log('userId', userId);
     
      //dispatch(authActions.setUserId(userId));
    } catch (error) {
      console.log(error);
      if (error) {
        setAlert({ show: true, status: 'error', msg: error.response.data.msg });
      }
    }
  };

  const togglePassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <section className='pt-10 sm:flex flex-col items-start bg-primary-11 h-screen'>
      <div className='max-w-lg mx-auto w-[90vw] relative lg:top-0 shadow-md'>
        <form
          onSubmit={handleSubmit}
          className=' bg-white pt-8 w-full px-8 rounded-t-lg'>
          <div className='absolute w-full left-0 z-30'>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
          </div>
          <h1 className='text-3xl text-left'>Sign up for a free account</h1>
          <div className='flex flex-col pt-4'>
            <label htmlFor='name' className='text-sm font-medium'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              className='pl-3 py-3 font-medium mt-1 rounded-sm bg-primary-2'
            />
          </div>
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
              className='pl-3 py-3 font-medium mt-1 rounded-sm bg-primary-2'
            />
          </div>
          <div className='flex flex-col pt-4'>
            <label htmlFor='password' className='text-sm font-medium'>
              Your Password
            </label>
            <div className='flex justify-between items-center bg-primary-12 relative mt-1'>
              <input
                autoComplete='on'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className='pl-3 py-3 font-medium rounded-sm bg-primary-2 w-full'
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
          <button className='capitalize bg-primary-3 w-full rounded py-3 my-6' type='submit'>
            sign up
          </button>
        </form>
        <p className='text-primary-10 text-sm py-3 tracking-wide leading-7 rounded-b-lg px-6 bg-[#f0f9ff]'>
          By clicking &#34;Sign Up&#34; button, I expressly agree to the Cafeteriase <span className='underline'> Terms of Service</span> and
          understand that my account information will be used according to
          Cafeteriase <span className='underline'>Privacy Policy</span>.
        </p>
      </div>
    </section>
  );
};

export default Signup;
