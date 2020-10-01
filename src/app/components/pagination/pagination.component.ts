import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginationService } from '@services/pagination.service'
import { UsersResponse } from '../../shared/interfaces'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  constructor(
    private _users: PaginationService
  ) { }

  ngOnInit(): void {
    this._users.getUsers().subscribe(response => this.datos = response)
  }

  datos: UsersResponse[] = []

  page_size: number = 3
  page_number: number = 1
  pageSizeOptions = [3, 5, 10, 30, 100]

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1 
  }

}
