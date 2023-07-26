import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string='';

  private tooltip: HTMLElement;

  constructor() {
    this.tooltip = document.createElement('h1');
    this.tooltip.classList.add('tooltip');
    document.body.appendChild(this.tooltip);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltip.textContent = this.tooltipText;
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltip.style.display = 'block';
    this.tooltip.style.color='red'
  }

  private hideTooltip() {
    this.tooltip.style.display = 'none';
  }
}
