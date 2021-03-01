import { Component, Input } from '@angular/core';
import * as $ from "jquery";

@Component({
    selector: 'nitro-loading',
    template: `
	<div id="habbo-loading">
	<div class="loading-component">
		<div class="loading-view">
			<div class="loading-bg">
				<div class="loading-habbo_logo"></div>
				<img class="loading-room_bg" src="">
			</div>
			<div *ngIf="message && message.length && hideProgress" class="loading-text">{{ message }}</div>
			<div class="loading-text"></div>
			<div class="loading-progress-container" *ngIf="!hideProgress">
				<div class="loading-bar">
					<div class="bar" [ngStyle]="{ 'width': ((percentage || 0) + '%') }"></div>
				</div>
				<div id="percent">%</div>
			</div>
		</div>
	</div>
</div>`

})
export class LoadingComponent
{
	@Input()
	public message?: string = '';

	@Input()
	public percentage?: number = 0;

	@Input()
	public hideProgress?: boolean = false;
	  
}       

$(document).ready(function() {
	var loadingText = $(".loading-text");
  
	var yazilar = [
	  "Daha gelmedik mi?",
	  "Piksel evren yükleniyor",
	  "Habbosuz 1 dakika, 60 saniye gibi geliyor.",
	  "Komik bir mesaj yükleniyor. Lütfen bekleyiniz..",
	  "Tişörtünü beğendim.",
	  "Zaman sadece bir yanılsamadan ibarettir.",
	  "Şhhh! Burada düşünmeye çalışıyorum, biraz sessiz ol!",
	  "Sarı ördeği takip ediniz.."
	];
  
	setInterval(function() {
	  var random = Math.floor(Math.random() * yazilar.length + 1);
	  loadingText.html(yazilar[random]);
	}, 2400);
  
	loadingText.html(yazilar[Math.floor(Math.random() * yazilar.length + 1)]);
	var resim = $(".loading-room_bg");

	resim.attr("src","/assets/images/loading/room-picture/" + Math.floor(Math.random() * 16) + ".png");
  
	setInterval(function() {
	  var count = Math.floor(Math.random() * 16);
  
	  resim.attr("src","/assets/images/loading/room-picture/" + count + ".png");
	}, 2400);
	
  });