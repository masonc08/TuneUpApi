import { playlist_search_dummy_response, playlist_search_dummy_response_no_results } from './dummy_responses';
import { process_body } from '@/providers/spotify/utils';
import assert from 'assert';


describe('when process_body function is run', () => {
  it("Should parse normal response", () => {
    const result = process_body(playlist_search_dummy_response);
    const expected_result = {
      href: 'hreflink',
      playlists: [
        { name: 'name1', description: 'desc1', id: 'id1', image: '' },
        { name: 'name2', description: 'desc2', id: 'id2', image: 'img2' },
        { name: 'name3', description: 'desc3', id: 'id3', image: 'img3' }
      ]
    };
    assert.deepStrictEqual(result, expected_result);
  });
  it("Should parse normal response if there is no results", () => {
    const result = process_body(playlist_search_dummy_response_no_results);
    const expected_result = {
      href: 'hreflink',
      playlists: []
    };
    assert.deepStrictEqual(result, expected_result);
  })
});
