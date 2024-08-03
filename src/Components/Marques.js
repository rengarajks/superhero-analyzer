import React from 'react';
import '../App.css';

function Marques() {
  const imageUrl = 'http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_04_hd_images_166331.jpg';

  const coverStyle = {
    backgroundImage: `url(${'https://wallpapers.com/images/hd/captain-america-mobile-thinking-hard-oci5zp2ty8uonny2.jpg'})`
  };
  const batman = {
    backgroundImage: `url(${'https://c4.wallpaperflare.com/wallpaper/404/762/522/ben-affleck-batman-v-superman-dawn-of-justice-dc-comics-wallpaper-preview.jpg'})`
  };
  const thor = {
    backgroundImage: `url(${'https://w0.peakpx.com/wallpaper/477/401/HD-wallpaper-thor-in-avengers-endgame-thumbnail.jpg'})`
  };
  const ironman = {
    backgroundImage: `url(${'https://pbs.twimg.com/media/E6Bt_N5WQAMwSEw.jpg'})`
  };
  const spiderman = {
    backgroundImage: `url(${'https://wallpapers.com/images/hd/spider-man-mobile-portrait-d7wdnk4y40siait6.jpg'})`
  };
  const wolverine = {
    backgroundImage: `url(${'https://w0.peakpx.com/wallpaper/133/676/HD-wallpaper-wolverine-x-men-art.jpg'})`
  };
  return (
    <div>
      <div className="gallery">
        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={coverStyle}>
				  </div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={batman}></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={ironman}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h gallery-h--tb">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={spiderman}></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={wolverine}></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={thor}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="block-33 display--inline-top">
          <div className="gutter relative">
            <div className="gallery-h">
              <div className="gallery-image relative">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={coverStyle}></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={coverStyle}></div>
                </div>
              </div>
              <div className="gallery-image">
                <div className="gallery-image__img relative">
                  <div className="fill-dimensions cover-img" style={coverStyle}></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Marques;
