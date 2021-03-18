import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('1s ease-out')),
      transition('inactive => active', animate('1s ease-in'))
    ])
  ]
})
export class MovieListComponent implements OnInit {
  MovieList: any[]=[{
      movieUrl :"https://www.filmsourcing.com/wp-content/uploads/2013/03/comedy-poster-tutorial-5.jpg",
      movieName:"Film Sourcing",
      time:"119 min",
      desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
      imdbRating:"6.1",
      flip:"inactive"  
  },
  {
    movieUrl :"http://webtoolfeed.files.wordpress.com/2012/06/brighton_rock_xlg1.jpg",
    movieName:"Film Sourcing",
    time:"119 min",
    desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
    imdbRating:"6.1",
    flip:"inactive"  
},{
  movieUrl :"https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2019/04/ultra-movie-poster-design-final.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},{
  movieUrl :"https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2019/04/ultra-movie-poster-design-final.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},{
  movieUrl :"https://www.filmsourcing.com/wp-content/uploads/2013/03/comedy-poster-tutorial-5.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},{
  movieUrl :"http://webtoolfeed.files.wordpress.com/2012/06/brighton_rock_xlg1.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},{
  movieUrl :"https://www.filmsourcing.com/wp-content/uploads/2013/03/comedy-poster-tutorial-5.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},{
  movieUrl :"http://webtoolfeed.files.wordpress.com/2012/06/brighton_rock_xlg1.jpg",
  movieName:"Film Sourcing",
  time:"119 min",
  desc:"A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. ",
  imdbRating:"6.1",
  flip:"inactive"  
},
]
list = [1,2,3,4,5];
  title="Movie List"
  flip: string = 'inactive';
  toggleFlip(index) {
     
    this.MovieList[index].flip = (this.MovieList[index].flip == 'inactive') ? 'active' : 'inactive';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
