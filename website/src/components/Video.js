import React from 'react';

const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0)

class Video extends React.Component {

  static defaultProps = {
    urls: [],
    poster: "",
    autoplay: false,
    loop: false,
    videoInit: false,
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
    if (props.url)
      this.url = props.url
    else
      this.url = this.props.urls[0].url;
    this.id =  'video' + hashCode(this.url)
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.initPlayer(), 100);
  }

  initPlayer() {
    if (this.props.urls.length < 1)
      return
    let options = Object.assign({}, this.props);
    options.id = this.id;
    options.url = this.url;

    let player = new Player(options);
    player.emit('resourceReady', options.urls);
    // if (!this.props.playsinline) {
    //   player.once('play',function(){
    //     //事件名称可以在上述查询
    //     console.log("go fullscreen.")
    //     player.getFullscreen(player.root);
    //   })
    // }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
      
  render() {
    return (
      <div id={this.id}></div>
    )
  }
}

export default Video;