import {
  Component,
  AfterViewInit,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-grid-trail-background',
  standalone: true,
  imports: [],
  template: `<div
    #host
    class="fixed inset-0 z-[-1] pointer-events-none"
  ></div>`,
})
export class BackgroundP5Component implements AfterViewInit {
  @ViewChild('host', { static: true }) hostRef!: ElementRef<HTMLDivElement>;
  private p?: p5;

  // Constants
  private readonly cell_size = 40;
  private readonly color_r = 79;
  private readonly color_g = 38;
  private readonly color_b = 233;
  private readonly starting_alpha = 255;
  private readonly background_color = 31;
  private readonly prob_of_neighbor = 0.5;
  private readonly amt_fade_per_frame = 5;
  private readonly stroke_weight = 1;

  // State
  private colorWithAlpha!: p5.Color;
  private numRows!: number;
  private numCols!: number;
  private currentRow = -1;
  private currentCol = -1;
  private allNeighbors: Array<{ row: number; col: number; opacity: number }> =
    [];

  ngAfterViewInit(): void {
    const sketch = (s: p5) => {
      s.setup = () => {
        const c = s.createCanvas(s.windowWidth, s.windowHeight);
        c.parent(this.hostRef.nativeElement);
        this.colorWithAlpha = s.color(
          this.color_r,
          this.color_g,
          this.color_b,
          this.starting_alpha,
        );
        s.noFill();
        s.stroke(this.colorWithAlpha);
        s.strokeWeight(this.stroke_weight);
        this.numRows = Math.ceil(s.windowHeight / this.cell_size);
        this.numCols = Math.ceil(s.windowWidth / this.cell_size);
      };

      s.draw = () => {
        s.background(this.background_color);

        // Cell indices under mouse
        const gridRow = Math.floor(s.mouseY / this.cell_size);
        const gridCol = Math.floor(s.mouseX / this.cell_size);

        // If mouse moved to a different cell, add neighbors
        if (gridRow !== this.currentRow || gridCol !== this.currentCol) {
          this.currentRow = gridRow;
          this.currentCol = gridCol;
          this.allNeighbors.push(
            ...this.getRandomNeighbor(gridRow, gridCol, s),
          );
        }

        // Highlighted current cell
        const x = gridCol * this.cell_size;
        const y = gridRow * this.cell_size;
        s.stroke(this.colorWithAlpha);
        s.rect(x, y, this.cell_size, this.cell_size);

        // Draw neighbors with fading opacity
        for (const neighbor of this.allNeighbors) {
          const neighborX = neighbor.col * this.cell_size;
          const neighborY = neighbor.row * this.cell_size;
          neighbor.opacity = Math.max(
            0,
            neighbor.opacity - this.amt_fade_per_frame,
          );
          s.stroke(this.color_r, this.color_g, this.color_b, neighbor.opacity);
          s.rect(neighborX, neighborY, this.cell_size, this.cell_size);
        }

        // Remove fully faded neighbors
        this.allNeighbors = this.allNeighbors.filter((n) => n.opacity > 0);
      };
    };

    this.p = new p5(sketch);
  }

  private getRandomNeighbor(row: number, col: number, s: p5) {
    const neighbors: Array<{ row: number; col: number; opacity: number }> = [];

    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        const neighborRow = row + dRow;
        const neighborCol = col + dCol;
        const isCurrentCell = dRow === 0 && dCol === 0;
        const isInBounds =
          neighborRow >= 0 &&
          neighborRow < this.numRows &&
          neighborCol >= 0 &&
          neighborCol < this.numCols;

        if (
          !isCurrentCell &&
          isInBounds &&
          Math.random() < this.prob_of_neighbor
        ) {
          neighbors.push({
            row: neighborRow,
            col: neighborCol,
            opacity: this.starting_alpha,
          });
        }
      }
    }
    return neighbors;
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.p) return;
    this.p.resizeCanvas(this.p.windowWidth, this.p.windowHeight);
    this.numRows = Math.ceil(this.p.windowHeight / this.cell_size);
    this.numCols = Math.ceil(this.p.windowWidth / this.cell_size);
  }
}
