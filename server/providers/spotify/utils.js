
/*
  Used for endpoints get_playlists_from_category and
  playlist_search, for parsing spotify responses, since
  both spotify endpoints return similar response bodies
*/
export const process_body = body => {
  const response = {};
  response['href'] = body['playlists']['href'];
  response['playlists'] = [];
  for (const item of body['playlists']['items']) {
    response['playlists'].push({
      'name': item['name'] || '',
      'description': item['description'] || '',
      'id': item['id'] || '',
      'image': item['images'][0]?.url || '',
    });
  }
  return response;
}