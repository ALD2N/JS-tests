const fs = require('fs');

let rawUsers = fs.readFileSync('users.json');
let usersData = JSON.parse(rawUsers);

let rawAlbums = fs.readFileSync('albums.json');
let albumsData = JSON.parse(rawAlbums);

//? album.title correspond au titre de l'album ou à l'agrégat des titres présents sur celui-ci ?

//! 1
function getUser (id = null){
    try{
        if(id){
            console.log(' + '+usersData[id-1].name)
        }
        else{
            usersData.forEach(user => {
                console.log(' - '+user.name)
            })
        }
    }catch(e){
        console.log('Valeur invalide');
    }
}

//! 2
//*on considère que la propriété title correspond au titre d'un album
function getAlbum (id = null){
    try{
        if(id){
            console.log(' + '+albumsData[id-1].title);
        }
        else{
            albumsData.forEach(album =>{
                console.log(' - '+album.title)
            })
        }
    }catch(e){
        console.log('Valeur invalide');
    }
}

//! 3
function getAlbumOfUser (id){
    try{
        let tempList = albumsData.filter(album => album.userId == id);
        tempList.forEach(album =>{
            console.log(' - '+album.title)
        })
    }catch(e){
        console.log('Valeur invalide');
    }
}

//! 4
//*on considère que la propriété title correspond à la liste des titres d'un albums mis bout-à-bout
function getTitles(id){
    try{
        let tempList = albumsData[id].title.split(' ');
        tempList.forEach(title =>{
            console.log(' - '+title)
        })
    }catch(e){
        console.log('Valeur invalide');
    }
}

//! 5
//* fonction utilisable pour demander la liste des users avec minimum n album
function atLeastNAlbum(n=1){
    try{
        usersData.forEach(user => {
            if(albumsData.filter(album => album.userId == user.id).length >= n){
                console.log(' - '+user.name)
            }
        })
    }catch(e){
        console.log('Valeur invalide');
    }
}

//! 1
/*
getUser(3);
getUser();
*/

//! 2
/*
getAlbum(5);
getAlbum();
*/

//! 3
/*
getAlbumOfUser(7);
*/

//! 4
/*
getTitles(4);
*/

//! 5
/*
atLeastNAlbum();
*/