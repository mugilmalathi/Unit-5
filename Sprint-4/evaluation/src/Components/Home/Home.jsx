import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

export const Home = () => {
  const [meetups, setMeetups] = React.useState([]);
  const [location, setLocation] = React.useState('');

  // const userData = JSON.parse(localStorage.getItem('userLoginDetails'));
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!userData) {
  //     navigate('/loginsignup');
  //   }
  // }, [userData]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/meetups').then((res) => {
      setMeetups(res.data);
    });
  }, []);

  return (
    <div className='homeContainer'>
      {meetups
        .filter((el) => {
          if (location === '') {
            return true;
          } else {
            return location === el.location;
          }
        })
        .map((el) => {
          const { title, location, date, time, theme } = el;
          return (
            <Link to={`add route here`} className='events'>
              <div
                style={{
                  border: '1px solid red',
                  margin: '20px auto',
                  width: '400px',
                }}
              >
                <div>Title: {title}</div>
                <div>Location: {location}</div>
                <div>Theme: {theme}</div>
                <div>
                  Date: {date} {time}
                </div>
              </div>
            </Link>
          );
        })}

      <div className='subscribedData'>
        <div>
          <select
            value={location} // add value here
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value=''>------</option>
            <option value='bangalore'>Bangalore</option>
            <option value='coimbatore'>Coimbatore</option>
            <option value='delhi'>Delhi</option>
            <option value='mumbai'>Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className='subscribedEvents'>
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[].map((el) => {
            return (
              <Link to={`add route here`} className='events'>
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
