import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const linkStyles = {
    backgroundColor: 'aqua',
    color: 'blue',
    textDecoration: 'none',
    fontStyle: 'italic',
  };

  return (
    <>
      <h1 style={{ color: 'gold', fontStyle: 'italic' }}>Handson 4</h1>
      <h2 style={{ color: 'green', fontStyle: 'italic' }}>
        Welcome to the Handson 4 Page of Login Authentication, query params, and URL params
      </h2>
      <div className="Link-Container">
        <table border="1" cellSpacing="10px" style={{ backgroundColor: 'black' }}>
          <tbody>
            <tr>
              <td style={{ backgroundColor: 'aqua' }}>
                <h3>
                  <Link to="./Signup" style={linkStyles}>
                    If you are a new user, kindly click here. You will be redirected to the Registration Page.
                  </Link>
                </h3>
              </td>
            </tr>

            <tr>
              <td style={{ backgroundColor: 'aqua' }}>
                <h3>
                  <Link to="./Login" style={linkStyles}>
                    If you are already a user, click here. You will be redirected to the Login Page.
                  </Link>
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WelcomePage;
