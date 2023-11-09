import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/shared/posts.service';
import { AlertService } from '../shared/components/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''

  constructor(
    private postsServise: PostService,
    private alert: AlertService
    ) {}

  ngOnInit() {
    this.pSub = this.postsServise.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: string) {
    this.dSub = this.postsServise.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.warning('Post deleted')
    })
  }

  ngOnDestroy(){
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }
}
