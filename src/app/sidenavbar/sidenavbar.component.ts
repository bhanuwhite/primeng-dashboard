import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent  implements OnInit{
ngOnInit(): void {
  
}
isSearchBarOpen = false;
showSearchInput= true


openSidebar: boolean = true;

menuSidebar = [
  {
    link_name: "Dashboard",
    link: "/dashboard",
    icon: "bx bx-grid-alt",
    sub_menu: []
  }, {
    link_name: "Category",
    link: null,
    icon: "bx bx-collection",
    sub_menu: [
      {
        link_name: "Data 1",
        link: "/category",
      }, {
        link_name: "Data 2",
        link: "data2",
      }, 
    ]
  }, {
    link_name: "Posts",
    link: null,
    icon: "bx bx-book-alt",
    sub_menu: [
      {
        link_name: "Data 3",
        link: "data3",
      }, {
        link_name: "Data 4",
        link: "data4",
      }, 
    ]
  }, {
    link_name: "Analytics",
    link: "/analytics",
    icon: "bx bx-pie-chart-alt-2",
    sub_menu: []
  }, {
    link_name: "Charts",
    link: "/charts",
    icon: "bx bx-line-chart",
    sub_menu: []
  }, {
    link_name: "plugins",
    link: null,
    icon: "bx bx-plug",
    sub_menu: [
      {
        link_name: "Data 5",
        link: "data5",
      }, {
        link_name: "Data 6",
        link: "data6",
      }, {
        link_name: "Data 7",
        link: "data7",
      }
    ]
  }, {
    link_name: "Explore",
    link: "/explore",
    icon: "bx bx-compass",
    sub_menu: []
  }, {
    link_name: "History",
    link: "/history",
    icon: "bx bx-history",
    sub_menu: []
  }, {
    link_name: "Setting",
    link: "/settings",
    icon: "bx bx-cog",
    sub_menu: []
  }
]


showSubmenu(itemEl: HTMLElement) {
  itemEl.classList.toggle("showMenu");
}

isExpanded = false;

toggleSidebar() {
  this.isExpanded = !this.isExpanded;
}

}
