import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(private serachSrv: SearchService) {

  }
  enteredSearchValue:string='';

  

  onSerachTextChange(searchText: string){
   // if(searchText.length > 2) {
      this.serachSrv.onSearchChnage.next(searchText)
   // }
    
  }
  
}
