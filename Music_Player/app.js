const music = new Audio('audio/1.mp3');
// music.play();
const songs = [
     {
        id: '1',
        songName: ` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
     },
     {
        id: '2',
        songName: ` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
     },
     {
        id: '3',
        songName: `Cartoon - On & On<br>
        <div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg"
     },
     {
        id: '4',
        songName: `Warriyo - Mortals<br>
        <div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg"
     },
     {
        id: '5',
        songName: `Ertugrual Gazi<br>
        <div class="subtitle">Ertugrual</div>`,
        poster: "img/5.jpg"
     },
     {
        id: '6',
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: "img/6.jpg"
     },
     {
        id: '7',
        songName: `Agar Tum Sath Ho<br>
        <div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg"
     },
     {
        id: '8',
        songName: `Suna Hai<br>
        <div class="subtitle">Neha Kakkar </div>`,
        poster: "img/8.jpg"
     },
     {
        id: '9',
        songName: `Dilber <br>
        <div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg"
     },
     {
        id: '10',
        songName: `Duniya<br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg"
     },
     {
        id: '11',
        songName: `Lagdi Lahore Di <br>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg"
     },
     {
        id: '12',
        songName: `Putt Jatt Da<br>
        <div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg"
     },
     {
        id: '13',
        songName: `Baarishein<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg"
     },
     {
        id: '14',
        songName: `vaaste <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg"
     },
     {
        id: '15',
        songName: `Lut Gaye<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg"
     },
     {
        id: '16',
        songName: `Tu Meri Jindgi Hai Tu<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpg"
     },
     {
        id: '17',
        songName: `Batao Yaad Hai Tumko Vo Jo Din Ko Churaya Tha<br>
        <div class="subtitle">Raha Fateh Ali Khan</div>`,
        poster: "img/17.jpg"
     },
     {
        id: '18',
        songName: `Mere Dhol Judaiyan<br>
        <div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "img/18.jpg"
     },
     {
        id: '19',
        songName: `Eh Munde pagal Ne Saara<br>
        <div class="subtitle">Ap Dhillon, Gurinder Gill, SHinda Kahlon</div>`,
        poster: "img/19.jpg"
     },
     {
        id: '20',
        songName: ` Dunny 82k<br>
        <div class="subtitle">Ap Dhillon, Gurinder Gill, SHinda Kahlon</div>`,
        poster: "img/20.jpg"
     },
    

     
]
// array ma docmument mathi class name thi for loop lagadi ena img[0] na sec ma aapde banayelo array no poster 
//nu location paste karo tag name .index ma hoy ae levanu
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

//search data start
let search_results=document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
   const {id,songName,poster}=element;
  // console.log(poster);
  //taking all the solglist in card
  let card=document.createElement('a');
  //addding the all the cards
  card.classList.add('card');
   
 //# willl move the list till that id
   card.href ="#"+id;
   // this innerhtml will take img and name of cardsa
  card.innerHTML=`
  <img src="${poster}" alt="">
                        <div class="content">
                       ${songName}
                        </div>
  `;
  search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
   let input_value = input.value.toUpperCase();
   let items = search_results.getElementsByTagName('a');

   for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName('content')[0];
   let text_value = as.textContent || as.innerHTML;
   //when writing and it match it has to show the song with matched values
   if(text_value.toUpperCase().indexOf(input_value)> -1){
      items[index].style.display="flex";
   }
   else{
      items[index].style.display="none";
   }
     //after takig arrow away form search it has to display none    
    if (input_value==0) {
      search_results.style.display="none";
    } else {
      search_results.style.display="";
    }
   }
})
//search data ends

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-puase-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})
//targeting the button on the lefthand side that when we play it has to show opacity =1
const makeAllBackground = () =>{ 
   Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
    el.style.background=  'rgb(105, 105, 170,.0)';
})  }

//targeting the button on the lefthand side that when we play it has to show the changed butoon
const makeAllPlay = () =>{ 
   Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
      el.classList.add('bi-play-circle-fill');
      el.classList.remove('bi-pause-circle-fill');
})  }


//targeting the no of music 
let index=0;
let poster_master_play=document.getElementById('poster_master_play');
//targeting download
let download_music = document.getElementById('download_music');

// console.log(index);
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        //this  will take index of download song
        download_music.href=`audio/${index}.mp3`;
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach((elss)=>{
             let {songName} =elss;
             title.innerHTML=songName;
             //this will take name of song as in array 
             //when we download it
             download_music.setAttribute('download',songName);
        });
      //when the song plays this below code makes the opacity of that song is 1
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

     //when the song plays at the side bar this 
     //will show the button for pause and when not palyed
     //this will show the button for plays
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
});

//Now targeting the currTime And endTime
let currentStart =document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
   let music_curr=music.currentTime;
   let music_dur=music.duration;

   // console.log(music_dur);
   let min1= Math.floor(music_dur/60);
   let sec1=Math.floor(music_dur%60);
   
   if(sec1<10){
      sec1=`0${sec1}`;
   }
   // console.log();
   currentEnd.innerText=`${min1}:${sec1}`;
   
    // console.log(music_dur);
    let min2= Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);

   if(sec2<10){
      sec2=`0${sec2}`;
   }
   // console.log();
   currentStart.innerText=`${min2}:${sec2}`;
  //targeting the seek,dot,line for song
   let progressBar= parseInt((music_curr/music_dur)*100);
   seek.value =progressBar;
   // console.log(seek.value);
    //the dot and bar will change in % 
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;



})
//this will change the time bar change event will change the time
seek.addEventListener('change',()=>{
   music.currentTime = seek.value * music.duration /100;
})

let vol_icon=document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
   if(vol.value==0){
      vol_icon.classList.remove('bi-volume-up-fill');
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.add('bi-volume-mute-fill');
   }
   if(vol.value>0 && vol.value<=50){
      vol_icon.classList.remove('bi-volume-up-fill');
      vol_icon.classList.add('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
   }
   if(vol.value>50){
      vol_icon.classList.add('bi-volume-up-fill');
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.remove('bi-volume-mute-fill');
   }
   let vol_a=vol.value;
   vol_bar.style.width =`${vol_a}%`;
   vol_dot.style.left =`${vol_a}%`;
   music.volume = vol_a/100;
})

//targeting the next song and previous song button here in add event lister code is same
//as we took previously the only thing we are changing is index
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
       index-=1;
      if(index<1){
         index= Array.from(document.getElementsByClassName('songItem')).length;
      }
       music.src=`audio/${index}.mp3`;
       poster_master_play.src=`img/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles=songs.filter((els)=>{
           return els.id==index;
       });
       songTitles.forEach((elss)=>{
            let {songName} =elss;
            title.innerHTML=songName;
       });
     //when the song plays this below code makes the opacity of that song is 1
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

    //when the song plays at the side bar this 
    //will show the button for pause and when not palyed
    //this will show the button for plays
       makeAllPlay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
});

next.addEventListener('click',()=>{
   index+=1;
  if(index > Array.from(document.getElementsByClassName('songItem')).length){
     index=1;
  }
   music.src=`audio/${index}.mp3`;
   poster_master_play.src=`img/${index}.jpg`;
   music.play();
   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');

   let songTitles=songs.filter((els)=>{
       return els.id==index;
   });
   songTitles.forEach((elss)=>{
        let {songName} =elss;
        title.innerHTML=songName;
   });
 //when the song plays this below code makes the opacity of that song is 1
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

//when the song plays at the side bar this 
//will show the button for pause and when not palyed
//this will show the button for plays
   makeAllPlay();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
});









//Trageting the left and right arrow of the popular songs 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft +=330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -=330;
});

//targeting the shuffule ,repeat,next
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
let a =shuffle.innerHTML;

switch (a) {
   case "next":
      shuffle.classList.add('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML='repeat';
      break;

   case "repeat":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.add('bi-shuffle');
      shuffle.innerHTML='random';
      break;
      

   case "random":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.add('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML='next';
      break;
     

}
})

//creating the function so that we can reapeat,shuufle,next play
const next_music = ()=>{
   if(index==songs.length){
      index=1
   }
   else{
       index++;
   }
   // console.log(index);
   music.src=`audio/${index}.mp3`;
   poster_master_play.src=`img/${index}.jpg`;
   music.play();
   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');
   //this  will take index of download song
   download_music.href=`audio/${index}.mp3`;
   let songTitles=songs.filter((els)=>{
       return els.id==index;
   });
   songTitles.forEach((elss)=>{
        let {songName} =elss;
        title.innerHTML=songName;
        //this will take name of song as in array 
        //when we download it
        download_music.setAttribute('download',songName);
   });
 //when the song plays this below code makes the opacity of that song is 1
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

//when the song plays at the side bar this 
//will show the button for pause and when not palyed
//this will show the button for plays
   makeAllPlay();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}

const repeat_music = ()=>{
   index;
   // console.log(index);
   music.src=`audio/${index}.mp3`;
   poster_master_play.src=`img/${index}.jpg`;
   music.play();
   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');
   //this  will take index of download song
   download_music.href=`audio/${index}.mp3`;
   let songTitles=songs.filter((els)=>{
       return els.id==index;
   });
   songTitles.forEach((elss)=>{
        let {songName} =elss;
        title.innerHTML=songName;
        //this will take name of song as in array 
        //when we download it
        download_music.setAttribute('download',songName);
   });
 //when the song plays this below code makes the opacity of that song is 1
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

//when the song plays at the side bar this 
//will show the button for pause and when not palyed
//this will show the button for plays
   makeAllPlay();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}



const random_music = ()=>{
   if(index==songs.length){
      index=1
   }
   else{
       index=Math.floor((Math.random()*songs.length) +1);
   }
   // console.log(index);
   music.src=`audio/${index}.mp3`;
   poster_master_play.src=`img/${index}.jpg`;
   music.play();
   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');
   //this  will take index of download song
   download_music.href=`audio/${index}.mp3`;
   let songTitles=songs.filter((els)=>{
       return els.id==index;
   });
   songTitles.forEach((elss)=>{
        let {songName} =elss;
        title.innerHTML=songName;
        //this will take name of song as in array 
        //when we download it
        download_music.setAttribute('download',songName);
   });
 //when the song plays this below code makes the opacity of that song is 1
   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 170,.1)";

//when the song plays at the side bar this 
//will show the button for pause and when not palyed
//this will show the button for plays
   makeAllPlay();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}

//adding the logic that when the song ends next song plays
//this will play based on html value in that button 
music.addEventListener('ended',()=>{
     let b=shuffle.innerHTML;
     switch (b) {
      case "repeat":
         repeat_music();
         break;
     
      case "next":
      next_music();
       break;

       case "random":
      random_music();
    break;
      
     }
})


//    //at gerater than 630 width in resposive screeen we are making the button
// //which is respoinsible for the song playlisve expand and collaps
// let menu_list_active_button =document.getElementById('menu_list_active_button');
// let menu_side=document.getElementsByClassName('menu_side')[0];

// menu_list_active_button.addEventListener('click',()=>{
//    menu_side.style.transform = "unset";
//    menu_list_active_button.style.opacity=0;
// });

// //when that side bar is active and you click on songside anywhere it has to unset like previous
// let song_side=document.getElementsByClassName('song_side')[0];
//  song_side.addEventListener('click',()=>{
//    menu_side.style.transform = "translateX(-100%)";
//    menu_list_active_button.style.opacity=1;
//  })
 


// Function to handle the menu side activation
function activateMenuSide() {
   const menu_side = document.getElementsByClassName('menu_side')[0];
   menu_side.style.transform = "unset";
   menu_list_active_button.style.opacity = 0;
 
   // Add a click event listener to the song_side to deactivate the menu side when clicked
   const song_side = document.getElementsByClassName('song_side')[0];
   song_side.addEventListener('click', deactivateMenuSide);
 }
 
 // Function to handle the menu side deactivation
 function deactivateMenuSide() {
   const menu_side = document.getElementsByClassName('menu_side')[0];
   menu_side.style.transform = "translateX(-100%)";
   menu_list_active_button.style.opacity = 1;
 
   // Remove the click event listener from the song_side after deactivating the menu side
   const song_side = document.getElementsByClassName('song_side')[0];
   song_side.removeEventListener('click', deactivateMenuSide);
 }
 
 // Function to handle the media query
 function handleMediaQuery(mediaQuery) {
   if (mediaQuery.matches) {
     // If the viewport width is below 1200px, add the click event listener to activate the menu side
     menu_list_active_button.addEventListener('click', activateMenuSide);
   } else {
     // If the viewport width is 1200px or more, remove the click event listener
     menu_list_active_button.removeEventListener('click', activateMenuSide);
   }
 }
 
 // Create a media query for max-width 1200px
 const mediaQuery = window.matchMedia("(max-width: 1200px)");
 
 // Call the handler initially to check the current viewport width on page load
 handleMediaQuery(mediaQuery);
 
 // Add a listener to detect changes in viewport width and call the handler accordingly
 mediaQuery.addListener(handleMediaQuery);
 
 // Add a click event listener to the menu_side to prevent deactivation when clicking on it
 const menu_side = document.getElementsByClassName('menu_side')[0];
 menu_side.addEventListener('click', (event) => {
   event.stopPropagation(); // Prevent event bubbling to the document level
 });
 