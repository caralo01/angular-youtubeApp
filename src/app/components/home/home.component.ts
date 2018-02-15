import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	public videos:any[]= [];
	public videoSel:any;

  constructor(private _ys:YoutubeService) { 
  	this._ys.getVideos()
  		.subscribe(videos => {
  			this.videos = videos
  			console.log(this.videos)
  		});
  }

  ngOnInit() {
  }


  verVideo(video){
  	this.videoSel = video;
  	$("#modalYoutubeVideo").modal();
  }

  cerrarModal(){
    this.videoSel = null;
    $("#modalYoutubeVideo").modal('hide');
  }

  cargarMas(){
    this._ys.getVideos()
      .subscribe(videos => {
        this.videos.push.apply(this.videos, videos);
      });
  }
}
