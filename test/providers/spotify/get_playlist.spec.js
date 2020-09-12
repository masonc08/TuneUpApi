import { get_playlist_dummy_response, get_playlist_dummy_response_no_preview } from './dummy_responses';
import { process_tracks } from '@/providers/spotify/get_playlist';
import assert from 'assert';


describe('When spotify playlists response is passed to process_tracks', () => {
  it('Should parse correctly under normal conditions', () => {
    const result = process_tracks(get_playlist_dummy_response);
    const expected_result = {
      tracks: [
        {
          id: 'id1',
          name: 'song 1',
          preview_url: 'preview 1',
          image: 'url200'
        },
        {
          id: 'id3',
          name: 'song 3',
          preview_url: 'preview 3',
          image: 'url200'
        }
      ],
      tracksWithPreview: 2,
      totalTracks: 3
    }
    assert.ok(result, expected_result);
  });
  it('Should parse correcctly if there is no preview available', () => {
    const result = process_tracks(get_playlist_dummy_response_no_preview);
    const expected_result = {
      tracks: [],
      tracksWithPreview: 0,
      totalTracks: 3
    };
    assert.ok(result, expected_result);
  });
});