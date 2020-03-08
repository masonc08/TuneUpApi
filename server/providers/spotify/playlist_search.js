import request from 'request';
import { urls } from './';

const get_image = images => {
    for (const image of images) {
        if (image['height'] >= 200 && image['width'] >= 200) {
            return image['url'];
        }
    }
    return '';
}

const process_results = body => {
    console.log()
    const response = {};
    response['href'] = body['playlists']['href'];
    const playlists = [];
    for (const item of body['playlists']['items']) {
        playlists.push({
            'name': item['name'],
            'description': item['description'],
            'href': item['href'],
            'image': get_image(item['images']),
        });
    response['playlists'] = playlists;
    }
    return response;
}

export const playlist_search = (res, key, query) => {
    const options = {
      'method': 'GET',
      'url': urls.playlist_search(query),
      'headers': {
        'Authorization': `Bearer ${key}`
      }
    };
    request(options, (error, response) => { 
        if (error) {
            throw new Error(error);
        }
        const query_results = JSON.parse(response.body);
        if (response.statusCode != 200) {
            res.status(response.statusCode).send(query_results);
            return;
        }
        // res.status(response.statusCode).send(query_results);
        const processed_response = process_results(query_results);
        res.status(response.statusCode).send(processed_response);
    });    
};