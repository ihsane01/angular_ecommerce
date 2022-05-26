import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import {  ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit {
public categorylist :any
  public products= []  as any;


  constructor(private dataservices: DataService,private router: Router) { }
  ngAfterViewInit() {
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.reveall);
// To check the scroll position on page load
    this.reveal();
    this.reveall();
  }
  ngOnInit(): void {
    // this.dataservices.findAllCategory().subscribe(data =>{
    //   this.categorie=data ;
    // },
    // error=>{
    //   console.log(error);
    // })
    this.dataservices.findAllCategory().subscribe(data => {
      this.categorylist = data;
  })
  // getProductcat(id:any){
     
  //   this.dataservices.listebycat(id).subscribe(response=>this.products=response)
  //   this.router.navigateByUrl('Productsbycategories')

  //   }
  }
  images = ['', 2, 3, 4].map((n) => `assets/images/slide${n}.jfif`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel ;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  reveal() {
    var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
    
  }
  
  reveall() {
    
    var revealls = document.querySelectorAll(".reveall");
    for (var i = 0; i < revealls.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealls[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      revealls[i].classList.add("active");
    } else {
      revealls[i].classList.remove("active");
    }
  }
  }
}
