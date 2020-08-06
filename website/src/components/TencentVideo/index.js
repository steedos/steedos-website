import React from 'react';

import styles from './styles.module.css';

class TencentVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomId: "video-" + Math.random().toString(36).substring(5)
    };
  }

  componentDidMount() {
    if (this.props.fileID) {
      var player = TCPlayer(this.state.randomId, { // player-container-id 为播放器容器ID，必须与html中一致
          fileID: this.props.fileID, // 请传入需要播放的视频fileID 必须
          appID: "1253849369", // 请传入点播账号的appID 必须
          autoplay: false //是否自动播放
          //其他参数请在开发文档中查看
      });
    }
  }
      
  render() {
    const {fileID} = this.props;

    if (fileID)
      return (
          <div className={styles.videoWrap}>
            <video id={this.state.randomId} preload="auto" className={styles.videoContainer} hplaysinline="true" webkit-playsinline="true" x5-playsinline="true"></video>
          </div>
      )
  }
}

export default TencentVideo;