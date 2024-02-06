import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from 'src/app/servvice/post.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  postData !: any
  constructor(private _postService:PostService,
              private _ref:ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.getallPosts()
  }

  detectChangeInparent(){
    console.log('Change detect in parent tree');  
  }

  getallPosts(){
    this._postService.getAllposts()
      .subscribe((res:any)=>{
        console.log(res);
        this.postData=res;
        this._ref.detectChanges()
      })
  }
}
