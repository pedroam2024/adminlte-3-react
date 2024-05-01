import { ContentHeader } from '@components';
import {Tweet} from 'react-tweet';
import YouTube, { YouTubeProps } from 'react-youtube';
import ReactWhatsapp from 'react-whatsapp';

const Blank = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  
  return (
    
    <div>
      <ContentHeader title="Blank Page" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
              <div>
                <div>
                  <Tweet id='1686744728795017216' />
                </div>  
                <div>
                <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
                </div>
              </div>          
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blank;
