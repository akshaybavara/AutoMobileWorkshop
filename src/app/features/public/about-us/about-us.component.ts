import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
    timelineEvents = [
    { year: '2015', description: 'Started with a small team dedicated to car repairs.' },
    { year: '2018', description: 'Expanded services and opened a second branch.' },
    { year: '2021', description: 'Introduced advanced diagnostics and customer support.' },
    { year: '2024', description: 'Serving thousands of satisfied customers every year.' }
  ];

  teamMembers = [
    { name: 'Anshul Kumar', role: 'Lead Technician', photo: 'assets/images/anshul.jpg' },
    // { name: 'Emily Johnson', role: 'Customer Support', photo: 'assets/images/team2.jpg' },
    { name: 'Shanky Dhariwal', role: 'Operations Manager', photo: 'assets/images/sanky.jpg' },
  ];

}
