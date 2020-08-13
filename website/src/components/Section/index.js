import React from 'react';

import styles from './styles.module.css';


class Section extends React.Component {
  
  constructor(props) {
    super(props);
    const randomId =  Math.random().toString(36).substring(5);
    this.state = {
      height: '50',
      sectionId: 'section-' + randomId,
      backgroundId: 'section-background-' + randomId
    };
  }

  // componentDidMount() {
  //   this.updateHeight();
  //   this.intervalUpdate = setInterval(this.updateHeight.bind(this), 2000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.intervalUpdate);
  // }

  // updateHeight() {
  //   const height = this.refs[this.state.sectionId].clientHeight;
  //   if (this.state.height !== height) {
  //     this.setState({ height });
  //   }
  // };

  render() {
    let {background, height, padding, color} = this.props;
    if (this.state.height !== height) {
      height = this.state.height;
    }
    if (background && (background.startsWith('/') || background.startsWith('http'))) {
      background = 'url(' + background + ')';
    }
    
    return (
      <>
      <div className={styles.sectionBackground} id={this.state.backgroundId}>
      <div className={styles.section} ref={this.state.sectionId} id={this.state.sectionId}>
        <style dangerouslySetInnerHTML={{__html: `
          #${this.state.sectionId} {
            color: ${color};
            padding: ${padding}px;
          }
          #${this.state.backgroundId} {
            background: ${background};  
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
          }
        `}}></style>
        {this.props.children}
      </div>
      </div>
      </>
    )
  }
}

Section.defaultProps = {
  padding: 30,
  height: 200,
  color: 'black'
}


export default Section;