import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'examples', loadChildren: 'app/web/+examples/examples.module#ExamplesModule' },
  { path: 'auth', loadChildren: 'app/web/+auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'examples', pathMatch: 'full' },
  { path: '**', redirectTo: 'examples' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
