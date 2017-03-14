import React from 'react';

const entryPage = ({ src }) => {
  const styles = {
    img: {
      height: '80%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (
    <div className="slides">
      <img src={src} alt="alt" style={styles.img} />
      <div className="caption center-align">
        <h3>This is our big Tagline!</h3>
        <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
      </div>
    </div>
  );
};

export default entryPage;
