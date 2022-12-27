import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NftportService implements OnInit {

  nftContract: string = "0x084046d7f551564ae5fdc3b999fe0da6804e1a32";
  nftPortFileUri: string = "https://ipfs.io/ipfs/bafkreigpazekhmnps2fstiyuoajbl2m2bj25eostc3enlzjumrroqvd3iy";
  nftPortUrl: string = "";
  chain= "polygon";

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
  }

  uploadReputationMetadata(transactionType: string, counterPartyAddr: string, userAddr: string){
    const header = new HttpHeaders({
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: environment.NFTPORT
    })
    const body = JSON.stringify({
      custom_fields: {
        transaction: transactionType, 
        transaction_with: counterPartyAddr, 
        myAddr: userAddr
      },
      name: 'LiveStore Reputation',
      description: 'NFT confirming a successfully completed sale and or purchase on the LiveStore platform.',
      file_url: this.nftPortFileUri,
      external_url: this.nftPortFileUri
    });
    let metaDataUrl = "";
    this.http.post("https://api.nftport.xyz/v0/metadata", body, {headers: header}).subscribe(data => {
      let resp: any = data;
      metaDataUrl = resp.metadata_uri
    });
    return metaDataUrl;
  }

  mintReputation(transactionType: string, counterPartyAddr: string, userAddr: string){
    const uri = this.uploadReputationMetadata(transactionType, counterPartyAddr, userAddr)
    if (!uri.startsWith("https://ipfs")){
      alert("There was an error uploading the Reputation metadata to IPFS");
      return;
    }
    let body = JSON.stringify({
      chain: 'polygon',
      contract_address: this.nftContract,
      metadata_uri: uri,
      mint_to_address: userAddr
    })
    const header = new HttpHeaders({
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: environment.NFTPORT
    })

    return this.http.post("https://api.nftport.xyz/v0/mints/customizable", body, {headers: header})
  }

  getUserReputationTokens(userAddr: string){
    const header = new HttpHeaders({
      accept: 'application/json',
      Authorization: environment.NFTPORT
    })
    let url = `https://api.nftport.xyz/v0/accounts/${userAddr}?chain=${this.chain}&page_size=50&include=metadata&contract_address=${this.nftContract}`;
    return this.http.get(url,{headers: header});
  }

}
