import { Component, input } from '@angular/core';
import { LucideAngularModule,  Wallet} from 'lucide-angular';

@Component({
  selector: 'app-quick-actions',
  imports: [LucideAngularModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.css',
})
export class QuickActions {
  //action = input.required<QuickActions>();
  
  readonly Wallet = Wallet;
}
