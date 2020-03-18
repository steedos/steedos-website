import React from 'react';

class Features extends React.Component {


  render() {
    const {features, cols} = this.props;

    if (features && features.length)
    return (
      <div className="slds-grid slds-gutters">
        {features.map(({ imageUrl, title, description }, idx) => (
            <div 
              key={idx}
              className={"slds-col slds-size_1-of-" + cols}>
                
              {imageUrl && (
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl(imageUrl)}
                    alt={title}
                  />
                </div>
              )}
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
    )
  }
}

export default Features;