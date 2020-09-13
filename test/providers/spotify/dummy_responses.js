export const get_playlist_dummy_response = {
  items: [
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id1',
        name: 'song 1',
        preview_url: 'preview 1'
      }
    },
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id2',
        name: 'song 2',
        preview_url: null
      }
    },
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id3',
        name: 'song 3',
        preview_url: 'preview 3'
      }
    },
  ]
};

export const get_playlist_dummy_response_no_preview = {
  items: [
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id1',
        name: 'song 1',
        preview_url: null
      }
    },
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id2',
        name: 'song 2',
        preview_url: null
      }
    },
    {
      track: {
        album: {
          images: [
            {
              height: 200,
              url: "url200",
              width: 200
            },
            {
              height: 300,
              url: "url300",
              width: 300
            },
            {
              height: 400,
              url: "url400",
              width: 400
            },
          ]
        },
        id: 'id3',
        name: 'song 3',
        preview_url: null
      }
    },
  ]
};

export const playlist_search_dummy_response = {
  playlists: {
    href: 'hreflink',
    items: [
      {
        "description": "desc1",
        "id": "id1",
        "images": [],
        "name": "name1",
      },
      {
        "description": "desc2",
        "id": "id2",
        "images": [
            {
                "height": 300,
                "url": "img2",
                "width": 300
            }
        ],
        "name": "name2",
      },
      {
        "description": "desc3",
        "id": "id3",
        "images": [
            {
                "height": 300,
                "url": "img3",
                "width": 300
            },
            {
              "height": 200,
              "url": "img32",
              "width": 200
          },
          {
            "height": 100,
            "url": "img33",
            "width": 100
        },
        ],
        "name": "name3",
      }
    ]
  }
};

export const playlist_search_dummy_response_no_results = {
  playlists: {
    href: 'hreflink',
    items: []
  }
};
