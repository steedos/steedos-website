import React from 'react';

class Video extends React.Component {

  static defaultProps = {
    id: "video-" + Math.random().toString(36).substring(5),
    poster: "",
    autoplay: false,
    loop: false,
    videoInit: true,
    fluid: true,
    playbackRate: [0.75, 1, 1.25, 1.5, 2],
    defaultPlaybackRate: 1,
    download: true,
    pip: false,
    keyShortcut: 'on',
    airplay: true,
    lang: 'zh-cn',
    playsinline: false,
    definitionActive: 'hover',
    "x5-video-player-type": "h5",
    "x5-video-player-fullscreen": true,
    "x5-video-orientation": "landscape"
  }

  constructor(props) {
    super(props);
    this.players = [];
  }

  componentDidMount() {
    this.players[this.props.id] = new Player(this.props);
    if (this.props.otherurls) {
      this.players[this.props.id].emit('resourceReady', this.props.otherurls);
    }
  }

  componentWillUnmount() {
    if (this.players[this.props.id])
      this.players[this.props.id].destroy(false);
  }
      
  render() {
    return (
      <div id={this.props.id}></div>
    )
  }
}

export default Video;