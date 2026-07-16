import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Accounts } from './pages/accounts/accounts';
import { AppLayout } from './app-layout/app-layout';
import { Transactions } from './pages/transactions/transactions';
import { Loans } from './pages/loans/loans';
import { Profile } from './pages/profile/profile';
import { Setting } from './pages/setting/setting';
import { Help } from './pages/help/help';
import { Investments } from './pages/investments/investments';

export const routes: Routes = [
  // 1. Root redirect (Forces empty URL to go straight to login)
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Auth routes (No layout)
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // 3. Authenticated routes (Wrapped inside AppLayout)
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'accounts', component: Accounts },
      { path: 'transactions', component: Transactions },
      { path: 'investments', component: Investments },
      { path: 'loans', component: Loans },
      { path: 'profile', component: Profile },
      { path: 'setting', component: Setting },
      { path: 'help', component: Help },
    ],
  },

  // 4. Fallback Catch-All (Wildcard)
  // Options A: Redirect to login
  { path: '**', redirectTo: 'login' },

  // Option B: Show a 404 page component instead
  // { path: '**', component: NotFoundComponent }
];
