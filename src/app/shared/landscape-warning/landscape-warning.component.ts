import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscape-warning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landscape-warning.component.html',
  styleUrl: './landscape-warning.component.scss',
})
export class LandscapeWarningComponent implements OnInit {
  showLandscapeWarning: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkOrientation();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    this.checkOrientation();
  }

  checkOrientation(): void {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLandscape = window.innerWidth > window.innerHeight;

    this.showLandscapeWarning = isMobile && isLandscape;
  }
}
