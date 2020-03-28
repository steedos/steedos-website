import React from 'react';

import styles from './styles.module.css';


class Section extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {height: '50'};
  }

  componentDidMount() {
    this.updateHeight();
    this.intervalUpdate = setInterval(this.updateHeight.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalUpdate);
  }

  updateHeight() {
    const height = this.refs.sectionRef.clientHeight;
    if (this.state.height !== height) {
      this.setState({ height });
    }
  };

  render() {
    let {background, height, padding} = this.props;
    if (this.state.height !== height) {
      height = this.state.height;
    }
    if (background && (background.startsWith('/') || background.startsWith('http'))) {
      background = 'url(' + background + ')';
    }
    
    return (
      <>
      <div className={styles.sectionBackground}></div>
      <div className={styles.section} ref="sectionRef">
        <style dangerouslySetInnerHTML={{__html: `
          .${styles.section} {
            min-height: ${height}px;
          }
          .${styles.sectionBackground} {
            background: ${background};  
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            height: ${height}px;
          }
        `}}></style>
        {padding && (<div style={{height: padding + 'px' }}></div>)}
        {this.props.children}
        {padding && (<div style={{height: padding + 'px' }}></div>)}
      </div>
      </>
    )
  }
}

Section.defaultProps = {
  padding: 30,
  height: 200
}


export default Section;