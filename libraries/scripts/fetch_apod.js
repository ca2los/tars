    'use strict';

    let nasa_key = 'Ts5ZxkXKWGHtT35tfpDLSWQzDeaYcVoWxHJcxRIs';
    let nasa_planetary = 'https://api.nasa.gov/planetary/apod?api_key=' + nasa_key;

    fetch(nasa_planetary).then(function(response){
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

        let apod_date = document.createElement('p');
        let apod_image = document.createElement('a');
        let apod_links = document.createElement('p');
        let apod_media = document.createElement('h4');
        let apod_title = document.createElement('h2');
        let apod_peeks = document.createElement('img');
        let apod_copyright = document.createElement('p');
        let apod_explanation = document.createElement('p');

        document.body.children[1].children[0].appendChild(apod_title).textContent = planetary.get_title;
        document.body.children[1].children[0].appendChild(apod_copyright).textContent = 'By ' + planetary.get_copyright;
        document.body.children[1].children[0].appendChild(apod_date).textContent = planetary.get_date;
        document.body.children[1].children[0].appendChild(apod_peeks).setAttribute('src',planetary.get_url);
        document.body.children[1].children[0].appendChild(apod_media).textContent = planetary.get_media;
        document.body.children[1].children[0].appendChild(apod_explanation).textContent = planetary.get_explanation;
        document.body.children[1].children[0].appendChild(apod_links);
        document.body.children[1].children[0].children[6].appendChild(apod_image).textContent = "Full HD Image";

        apod_title.setAttribute('class','title');
        apod_copyright.setAttribute('class','author');
        apod_date.setAttribute('class','date');
        apod_peeks.setAttribute('class','rendition');
        apod_media.setAttribute('class','type');
        apod_explanation.setAttribute('class','description')
        apod_image.setAttribute('href',planetary.get_hdurl);
        apod_image.setAttribute('target','_blank');
        apod_image.setAttribute('class','button');
    });

    // ASTRONOMY PICTURE OF THE DAY