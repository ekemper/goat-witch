// // GET https://photoslibrary.googleapis.com/v1/sharedAlbums

// import google
// // Returns a list of all albums owner by the logged in user from the Library
// // API.
// async function libraryApiGetAlbums(authToken) {
//     let albums = [];
//     let nextPageToken = null;
//     let error = null;
  
//     let parameters = new URLSearchParams();
//     parameters.append('pageSize', config.albumPageSize);
  
//     try {
//         const albumResponse = await fetch(config.apiEndpoint + '/v1/sharedAlbums?', {
//           method: 'get',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + authToken
//           },
//         });
  
//         const result = await checkStatus(albumResponse);
  
//         console.log(`Response: ${result}`);
  
//         if (result && result.albums) {
//           console.log({albums: result.albums});
//         }
  
//     } catch (err) {
//       error = err;
//       console.log({error});
//     }
  
//     return {albums, error};
//   }