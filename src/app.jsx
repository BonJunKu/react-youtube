import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  //배열이 비었으면 최초 마운트 시에만 호출.
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAkA1qhALOkcbjffIVlwlpf2gjBHCaudcA',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
    console.log('useEffect');
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
