import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
posts:any;

constructor(
public api: ApiService,
public loadingController: LoadingController
){}

async getPost() {
  const loading= await this.loadingController.create({

  });


await loading.present();
    await this.api.get('posts')
      .subscribe(
        res => {
          console.log(res);
          this.posts = res;
          loading.dismiss();
        },
        err => {
          console.log(err);
          loading.dismiss();
        }
      )

    }

ngOnInit() {
  this.getPost();
}
}
