import React from 'react';

const Button = ({ label, classes, onClick }) => {
      return (
            <button onClick={onClick}
                  className={`btn ${classes}`}>{label}</button>
        );
}

export default Button;