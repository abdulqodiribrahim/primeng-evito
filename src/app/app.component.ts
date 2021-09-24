import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { ConfirmationService, MenuItem, TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { NodeService } from './nodeservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: MenuItem[];

  visibleSidebar1;
  files1: TreeNode[];
  selectedFile: TreeNode;

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.files1 = files));
  }

  nodeSelect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label,
    });
    console.log(event.node.label);
    this.router.navigate(['/master-area']);
  }

  nodeUnselect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label,
    });
  }
}
