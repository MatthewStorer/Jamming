let clientID = 'e53ec2f0d1b04fa78d270a3ba0294ebe';
let secret = '807ec564d3984a2693f39f5f58bfecc8';

const spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = 'https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}';
      window.location = accessUrl;
    }
  },

  search(term)
  {
    return spotify.getAccessToken().then(() => {
return fetch(`https://api.spotify.com/v1/search?type=track&q=term`,
  {
    headers:
    {
      Authorization: `Bearer ${accessToken}`
    }
  }
);
}
).then(response => {
  return response.json();
}).then(jsonResponse => {
      if (jsonResponse.tracks)
      {
        return jsonResponse.tracks.map(track => ({
          ID: track.id,
          Name: track.name,
          Artist: track.artists[0].name,
          Album: track.album.name,
          URI: track.uri


        }));
      }



  })
},

  savePlayList(name, uris)
  {
    if (!name || !trackUris.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;
    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch('https://api.spotify.com/v1/users/${userId}/playlists', {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch('https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks', {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: uris})
        });
      });
    });
  }

}



export default spotify;
