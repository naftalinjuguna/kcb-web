import { Component } from '@angular/core';
import { LucideAngularModule, Router, Wallet } from 'lucide-angular';
import { QuickActions } from '../../quick-actions/quick-actions';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly Wallet = Wallet; 

  accounts = [
    {
      type: "Current",
      icon: "Wallet",
      name: "KCB Current Account",
      number: "0112 3456 7890",
      balance: "145,000.00"
    },
    {
      type: "saving",
      name: "KCB Savings Account",
      number: "0098 7654 3210",
      balance: "45,000.20"
    },
    {
      type: "bussiness",
      name: "KCB M-pesa Account",
      number: "254 712 345 678",
      balance: "340,000.00"
    }
    
  ];

  quickActions = [
    {
      id: 1,
      title: 'Send Money'
    },
    {
      id: 2,
      title: 'Pay Bill'
    },
    {
      id: 3,
      title: 'Buy Airtime'
    },
    {
      id: 4,
      logo:'Wallet',
      title: 'Bank Statement'
    },
    {
      id: 5,
      title: 'Open Account'
    },
    {
      id: 6,
      title: 'Apply Loan'
    }
  ]

  hour = new Date().getHours();
}
