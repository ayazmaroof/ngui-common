import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '../../modules';

import { AppComponent } from './app.component';
import { InviewComponent, InviewDirectiveTestComponent } from './inview-module-test';
import { InviewPageComponent, ListComponent, VirtualListComponent } from './list-module-test';

import {
  DynamicComponentServiceTestComponent,
  NguiForInDirectiveTestComponent,
  NguiHighlightPipeTestComponent
} from './utils-module-test';

@NgModule({
  declarations: [
    AppComponent,
    InviewComponent,
    InviewDirectiveTestComponent,
    InviewPageComponent,
    ListComponent,
    VirtualListComponent,
    DynamicComponentServiceTestComponent,
    NguiForInDirectiveTestComponent,
    NguiHighlightPipeTestComponent
  ],
  imports: [
    BrowserModule,
    NguiListModule,
    NguiInviewModule,
    NguiUtilsModule,
    RouterModule.forRoot(
      [
        { path: 'inview/ngui-inview', component: InviewComponent },
        { path: 'inview/nguiInview', component: InviewDirectiveTestComponent },
        { path: 'list/ngui-inview-page', component: InviewPageComponent },
        { path: 'list/ngui-list', component: ListComponent },
        { path: 'list/ngui-virtual-list', component: VirtualListComponent },
        { path: 'utils/dynamic-component-service', component: DynamicComponentServiceTestComponent },
        { path: 'utils/ngui-for-in', component: NguiForInDirectiveTestComponent },
        { path: 'utils/ngui-highlight', component: NguiHighlightPipeTestComponent },
        { path: '', redirectTo: '/inview/ngui-inview', pathMatch: 'full'}
      ] // , { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
