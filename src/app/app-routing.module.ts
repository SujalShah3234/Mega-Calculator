import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BinarySearchTreeComponent } from './components/binary-search-tree/binary-search-tree.component';
import { BinningComponent } from './components/binning/binning.component';
import { ChiSquareTestComponent } from './components/chi-square-test/chi-square-test.component';
import { CuboidComponent } from './components/cuboid/cuboid.component';
import { DPLCSComponent } from './components/dplcs/dplcs.component';
import { HeapComponent } from './components/heap/heap.component';
import { AuthguardService } from './components/login/authguard.service';
import { LoginComponent } from './components/login/login.component';
import { MasterTheormComponent } from './components/master-theorm/master-theorm.component';
import { Pagenotfound404Component } from './components/pagenotfound404/pagenotfound404.component';
import { RedblackTreeComponent } from './components/redblack-tree/redblack-tree.component';
import { DecisionTheoryComponent } from './components/decision-theory/decision-theory.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'nav',
    canActivate: [AuthguardService],
    component: NavbarComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'cuboid', component: CuboidComponent },
      { path: 'chisquare', component: ChiSquareTestComponent },
      { path: 'binning', component: BinningComponent },
      { path: 'rbtree', component: RedblackTreeComponent },
      { path: 'dplcs', component: DPLCSComponent },
      { path: 'bst', component: BinarySearchTreeComponent },
      { path: 'heap', component: HeapComponent },
      { path: 'mastertheorm', component: MasterTheormComponent },
      { path: 'decisionTheory', component: DecisionTheoryComponent }
    ]
  },
  { path: 'pagenotfound', component: Pagenotfound404Component },
  { path: '**', redirectTo: '/pagenotfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
