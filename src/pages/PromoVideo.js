import React from 'react';
import ReactPlayer from 'react-player';
import styles from './PromoVideo.scss';

import Banner from '../components/Banner/Banner';

export const PromoVideo = () => {
  const [watchCompleted, setWatchCompleted] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const onProgress = ({ playedSeconds }) => {
    if (playedSeconds > 5) {
      setWatchCompleted(true);
      setIsPlaying(false);
    }
  };

  const onClickOk = (e) => {
    console.log(e.currentTarget.className);
  };
  return (
    <>
      {watchCompleted && <Banner onClickOk={onClickOk} />}
      <div className={watchCompleted ? 'videoZIndex' : 'player-wrapper'}>
        <ReactPlayer
          playing={isPlaying}
          className="react-player"
          styles={styles.PromoVideo}
          url="https://www.youtube.com/watch?v=M7FIvfx5J10&ab_channel=VolvoTrucks"
          volume={0.1}
          width={'100%'}
          height={'100%'}
          onProgress={onProgress}
        />
      </div>
    </>
  );
};
