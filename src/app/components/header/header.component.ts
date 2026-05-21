import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  toggleTools = false;

  mobileMenuOpen = false;

  toggleDropdown(event: Event): void {
    event.stopPropagation();

    this.toggleTools = !this.toggleTools;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenus(): void {
    this.toggleTools = false;

    this.mobileMenuOpen = false;
  }

  @HostListener('document:click')
  clickOutside(): void {
    this.toggleTools = false;
  }
}
