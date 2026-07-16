import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Dashboard } from '../pages/dashboard/dashboard';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {}
