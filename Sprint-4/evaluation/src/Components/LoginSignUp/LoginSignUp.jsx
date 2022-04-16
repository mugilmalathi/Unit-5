import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const initialSignupForm = {
  name: '',
  password: '',
  location: '',
  technology: false,
  food: false,
  movies: false,
  culture: false,
  art: false,
  drama: false,
  image: '',
};
const initialLoginForm = {
  name: '',
  password: '',
};

export const LoginSignUp = () => {
  const [signupForm, setSignupForm] = React.useState(initialSignupForm);
  const {
    name: su_name,
    password: su_password,
    location,
    technology,
    food,
    movies,
    culture,
    art,
    drama,
    image,
  } = signupForm;
  const [loginForm, setLoginForm] = React.useState(initialLoginForm);
  const { name, password } = loginForm;
  const navigate = useNavigate();

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/users?name=${name}&password=${password}`)
      .then((res) => {
        let { data } = res;
        if (data.length > 0) {
          localStorage.setItem('userLoginDetails', JSON.stringify(data[0]));
          navigate('/');
        }
      });
  };

  const handleSignupFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setSignupForm({ ...signupForm, [name]: checked });
    } else {
      setSignupForm({ ...signupForm, [name]: value });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    let signupFormCopy = {
      name: su_name,
      password: su_password,
      location,
      image,
      interests: [],
      subscribed: [],
    };
    let interests = ['technology', 'food', 'movies', 'culture', 'art', 'drama'];

    for (let key in signupForm) {
      if (interests.includes(key) && signupForm[key] === true) {
        signupFormCopy.interests.push(key);
      }
    }
    axios.post('http://localhost:8080/users', signupForm);
  };

  return (
    <div className='loginSignUp'>
      <form className='signUp' onSubmit={handleSignup}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type='text'
          className='name'
          name='name'
          value={su_name}
          onChange={handleSignupFormChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type='password'
          className='password'
          name='password'
          value={su_password}
          onChange={handleSignupFormChange}
          required
        />
        <br />
        <select
          value={location}
          name='location'
          className='location'
          onChange={handleSignupFormChange}
        >
          <option value=''></option>
          <option value='bangalore'>Bangalore</option>
          <option value='kolkata'>Kolkata</option>
          <option value='delhi'>Delhi</option>
          <option value='mumbai'>Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          name='technology'
          checked={technology}
          type='checkbox'
          className='technology'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>food</label>
        <input
          name='food'
          checked={food}
          type='checkbox'
          className='food'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>movies</label>
        <input
          name='movies'
          checked={movies}
          type='checkbox'
          className='movies'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>culture</label>
        <input
          name='culture'
          checked={culture}
          type='checkbox'
          className='culture'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>art</label>
        <input
          name='art'
          checked={art}
          type='checkbox'
          className='art'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>drama</label>
        <input
          name='drama'
          checked={drama}
          type='checkbox'
          className='drama'
          onChange={handleSignupFormChange}
        />
        <br />
        <label>image</label>
        <input
          type='text'
          className='image'
          name='image'
          value={image}
          onChange={handleSignupFormChange}
          required
        />
        <br />
        <input type='submit' className='submitSignUpForm' />
      </form>

      <form className='login' onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type='text'
          name='name'
          value={name}
          className='name'
          onChange={handleLoginFormChange}
          required
        />
        <br />
        <label>password</label>
        <input
          type='password'
          className='password'
          name='password'
          value={password}
          onChange={handleLoginFormChange}
          required
        />
        <br />
        <input type='submit' className='submitLoginForm' />
      </form>
    </div>
  );
};
