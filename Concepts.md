# Concepts Used

## Components:
1) Song - contains whole song player componenets - contains: song, name, artist & the picture
2) Player - contains play, pause, skip options
3) Library - side library with all songs
4) LibrarySong - seperate component for each song in library.

**icons**
Added Font awesome package.

- import the component, import the icon and then pass it to the prop.

**styles**
Created app.scss and partials _player.scss and _song.scss

### In Components:

**Player:**

play/pause songs via useRef
have two events on audio, `onLoadedMetadata` & `onTimeUpdate` - to load time and change it resp.