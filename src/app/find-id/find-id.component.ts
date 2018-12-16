import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.component.html',
  styleUrls: ['./find-id.component.css'],
  providers: [MainService]
})
export class FindIdComponent implements OnInit {

  constructor(private mainService: MainService) { }
  assetId: string;
  assetdetails: any;
  isScum: string = "scum";
  addresses: string[] = ["3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8", "3MsKhZJzGZ1hnZJZUPYUAKjGQdk7Q7qoCRa"];
  ngOnInit() {
  }
  FindId() {
    console.log(this.assetId);
    this.mainService.getDetails(this.assetId).subscribe(r => {this.assetdetails = r;});
  }
  SignTr(){
    Waves.signAndPublishTransaction({
      
        "type": 12,
        "data": {
          "fee": {
            "assetId": "WAVES",
            "tokens": "0.005"
          },
          "data": [
            {
              "type": "string",
              "key": this.assetId,
              "value": this.isScum
            }
          ]
        }
      }
    ).then(
        res,  // res - a transaction with a signature, ready for a sending to the node
        err   // err - the error message 
    )
  }

}
