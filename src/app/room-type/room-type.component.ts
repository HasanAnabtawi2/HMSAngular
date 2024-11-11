import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { roomTypeDTO } from '../DTOs/RoomTypeDTO';
import { HttpClient } from '@angular/common/http';
import { RoomTypeService } from '../Services/room-type.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit{

	 selectedTypeId!:number;
	 
	
	
	onSelectedTypeId(selectedRoomTypeId:number){

		this.selectedTypeId=selectedRoomTypeId;

	}




roomTypes!:roomTypeDTO[];

constructor(private modalService:NgbModal,private httpClient:HttpClient,private roomTypeService:RoomTypeService,transletService:TranslateService){





}
	
	ngOnInit(): void {
		this.LoadAll()
	}
 

	deleteItem(id:number){

		this.selectedTypeId=id;

	}



	LoadAll(){
		debugger
		this.roomTypeService.LoadAll().subscribe({
			next:(resData)=>{
								
				this.roomTypes=resData;
			}
		})
	}










}

