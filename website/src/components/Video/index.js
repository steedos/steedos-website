import React from 'react';

class Video extends React.Component {

  static defaultProps = {
    urls: [],
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
    this.id = "video-" + Math.random().toString(36).substring(5);
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.initPlayer(), 100);
  }

  initPlayer() {
    if (this.props.urls.length < 1)
      return
    let options = Object.assign({}, this.props);
    if (!options.url)
      options.url = this.props.urls[0].url;
    options.id = this.id;

    this.player = new Player(options);
    this.player.emit('resourceReady', options.urls);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    if (this.player && this.player.destroy)
      this.player.destroy(true);
  }
      
  render() {
    return (
      <div id={this.id}></div>
    )
  }
}

export default Video;