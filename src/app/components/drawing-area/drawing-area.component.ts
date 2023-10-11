import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'drawing-area',
  templateUrl: './drawing-area.component.html',
})
export class DrawingAreaComponent implements AfterViewInit {
  @ViewChild('drawingCanvas', { static: true }) drawingCanvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;
  selectedColor = '#000000';
  clearButtonText = 'Clear Drawing';
  lineWidth = 2; 

  ngAfterViewInit() {
    this.context = this.drawingCanvas.nativeElement.getContext('2d');
  }

  startDrawing(event: MouseEvent) {
    this.isDrawing = true;
	this.context.lineWidth = this.lineWidth;
    this.context.beginPath();
    this.context.moveTo(
      event.clientX -
        this.drawingCanvas.nativeElement.getBoundingClientRect().left,
      event.clientY -
        this.drawingCanvas.nativeElement.getBoundingClientRect().top
    );
  }

  draw(event: MouseEvent) {
    if (!this.isDrawing) return;
    this.context.strokeStyle = this.selectedColor;
	this.context.lineWidth = this.lineWidth;
    this.context.lineTo(
      event.clientX -
        this.drawingCanvas.nativeElement.getBoundingClientRect().left,
      event.clientY -
        this.drawingCanvas.nativeElement.getBoundingClientRect().top
    );
    this.context.stroke();
  }

  endDrawing() {
    this.isDrawing = false;
    this.context.closePath();
  }

  clearCanvas() {
    this.context.clearRect(
      0,
      0,
      this.drawingCanvas.nativeElement.width,
      this.drawingCanvas.nativeElement.height
    );
  }

  setLineWidth(event: Event) {
	this.lineWidth = +(<HTMLInputElement>event.target).value;
  }
  
}
