    'use strict';

    let nasa = 'Ts5ZxkXKWGHtT35tfpDLSWQzDeaYcVoWxHJcxRIs';
    let nasa_planetary = 'https://api.nasa.gov/planetary/apod?api_key=' + nasa;

    fetch(nasa_planetary).then(function (response){
       return response.json();
    }).then(function (data){
        console.log(data);
        let planetary = {
            get_copyright:data.copyright,
            get_date:data.date,
            get_explanation:data.explanation,
            get_hdurl:data.hdurl,
            get_media:data.media_type,
            get_service:data.service_version,
            get_title:data.title,
            get_url:data.url
        }
        console.log(planetary);
    })